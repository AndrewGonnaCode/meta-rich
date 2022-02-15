import React from "react";
import "./devicePopup.scss";

const DevicePopup = () => {
  const hidePopup = () => {
    document.getElementById("devicePopup").style.display = "none";
  };

  return (
    <div id="devicePopup" className="devicePopup">
      <p className="title">Your device does not support metamask</p>
      <p className="devicePopup__text">
        Metamask extension is not supported from your browser. To buy tokens, go
        to the website from a computer with Google Chrome, Firefox or Edge
        browser.
      </p>
      <button onClick={hidePopup} className="btn">
        Proceed
      </button>
    </div>
  );
};

export default DevicePopup;
