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

function App() {
  const [showDevicePopup, setShowDevicePopup] = useState(false);

  const checkUserBrowser = () => {
    let userAgent = navigator.userAgent;
    const isChrome = userAgent.match(/chrome|chromium|crios/i);
    const isFirefox = userAgent.match(/firefox|fxios/i);
    const isEdge = userAgent.match(/edg/i);
    if (!isChrome && !isFirefox && !isEdge) {
      setShowDevicePopup(true);
    }
  };

  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);

  return (
    <>
      <Header />
      <Promo />
      <div className="back">
        <Purchase />
        <Story />
        <Roadmap />
        <Info />
        <FAQ />
        <Footer />
      </div>

      {/* {(isMobile || showDevicePopup) && <DevicePopup />} */}
    </>
  );
}

export default App;
