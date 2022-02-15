import React, { useState } from "react";
import "./header.scss";
import logo from "../../assets/images/logo.png";
import instLogo from "../../assets/icons/inst.svg";
import twitterLogo from "../../assets/icons/twitter.svg";
// import hamburger from '../../assets/images/hamburger.svg'
import { useEthers } from "@usedapp/core";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const { activateBrowserWallet, account, chainId } = useEthers();

  const executeScroll = (block) => {
    let anchor = document.querySelector(`#${block}`);
    if (block === "mint" && !anchor) {
      anchor = document.querySelector("#timer");
    }
    anchor?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuVisible(false);
  };

  return (
    <header className="container header">
      <div className="header__topbar">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <nav className="header__navbar">
        <ul className="header__list">
          <li onClick={() => executeScroll("story")}>About</li>
          <li onClick={() => executeScroll("roadmap")}>Roadmap</li>
          <li onClick={() => executeScroll("team")}>FAQ</li>
        </ul>
      </nav>

      <ul className="header__social">
        <li>
          <a href="">
            <img src={twitterLogo} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={instLogo} alt="instagram" />
          </a>
        </li>
      </ul>

      {/* MOBILE MENU */}
      <nav
        className={`header__mobile-menu ${
          isMobileMenuVisible ? "" : "header__mobile-menu_hidden"
        }`}
      >
        <ul className="header__mobile-nav">
          <li onClick={() => executeScroll("story")}>About</li>
          <li onClick={() => executeScroll("roadmap")}>Roadmap</li>
          <li onClick={() => executeScroll("team")}>FAQ</li>
        </ul>
        <div className="header__mobile-social">
          <a href="https://discord.gg/EUP4xfQwnq" target="_blank">
            <img src={instLogo} alt="discord" />
          </a>
          <a href="https://twitter.com/SoldierApes" target="_blank">
            <img src={twitterLogo} alt="twitter" />
          </a>
        </div>
        {/* <button className='btn header__mobile-btn'>Connect Metamask</button> */}
        <button
          className="header__mobile-close"
          onClick={() => setIsMobileMenuVisible(false)}
        >
          ×
        </button>
      </nav>
    </header>
  );
};

export default Header;
