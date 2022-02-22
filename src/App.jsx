import { isMobile } from "react-device-detect";
import Purchase from "./components/Purchase/Purchase";
import Story from "./components/Story/Story";
import Info from "./components/Info/Info";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Modal from "./components/Modal/Modal";
import FAQ from "./components/FAQ/FAQ";
import { WOW } from "wowjs";
import Footer from "./components/Footer/Footer";
import Roadmap from "./components/Roadmap/Roadmap";
import { ChainId } from "@usedapp/core";

const expectedChainId = "0x" + ChainId.Rinkeby;

function App() {
  const [showDevicePopup, setShowDevicePopup] = useState(false);
  const [showWrongChainPopup, setShowWrongChainPopup] = useState(false);

  const checkUserBrowser = () => {
    let userAgent = navigator.userAgent;
    const isChrome = userAgent.match(/chrome|chromium|crios/i);
    const isFirefox = userAgent.match(/firefox|fxios/i);
    const isEdge = userAgent.match(/edg/i);
    if (!isChrome && !isFirefox && !isEdge) {
      setShowDevicePopup(true);
    }
  };

  const checkChainId = async () => {
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    if (chainId !== expectedChainId) {
      switchChain();
      // setShowWrongChainPopup(true);
    }
  };

  const switchChain = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: expectedChainId }],
      });
      // setShowWrongChainPopup(false);
    } catch (error) {
      alert(`Please switch network to Rinkeby!`);
      console.error(error);
    }
  };

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
    checkUserBrowser();
    checkChainId();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Promo switchChain={switchChain} />
      {/*   
        <Purchase />
        <Story />
        <Roadmap />
        <Info />
        <FAQ /> */}
      <Footer />
      {showWrongChainPopup && (
        <Modal
          text="To use the app, switch to the correct network by pressing the button bellow"
          closeModal={switchChain}
        />
      )}
    </>
  );
}

export default App;
