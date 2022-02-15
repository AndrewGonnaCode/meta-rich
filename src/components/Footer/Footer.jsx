import React from "react";
import "./Footer.scss";
import instIcon from "../../assets/icons/inst.svg";
import twitterIcon from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-social">
        <img src={instIcon} alt="instagram" />
        <img src={twitterIcon} alt="twitter" />
      </div>
      <div className="footer-copyright">© All rights reserved</div>
    </footer>
  );
};

export default Footer;
