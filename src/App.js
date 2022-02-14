
import './App.css';
import { isMobile } from "react-device-detect";
import Purchase from './components/Purchase/Purchase';
import Story from './components/Story/Story';
import Info from './components/Info/Info';

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


  return (
    <>
    <Header
    />
    <Promo />
    <Purchase/>
     <Story/>
    <Roadmap />
    <Info/>
    <FAQ />
    <Footer
    />

    {(isMobile || showDevicePopup) && <DevicePopup />}
  </>
  );
}

export default App;
