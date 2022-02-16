import React from "react";
import "./Modal.scss";

const Modal = ({ text, onClose }) => {
  return (
    <div id="devicePopup" className="devicePopup">
      <p className="title">{text}</p>
      <p className="devicePopup__text"></p>
      <button onClick={onClose} className="btn btn_modal">
        Proceed
      </button>
    </div>
  );
};

export default Modal;
