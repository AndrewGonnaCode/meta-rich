import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/icons/logo.png'
import discordLogo from '../../assets/icons/discord.svg'
import twitterLogo from '../../assets/icons/twitter.svg'
import openseaLogo from '../../assets/icons/opensea.svg'
import hamburger from '../../assets/images/hamburger.svg'
import metamaskIcon from '../../assets/icons/metamask.svg'
import whitepaper from '../../assets/pdf/whitepaper.pdf'
import { useEthers } from '@usedapp/core'

const Header = ({ walletAddress, handleConnectBtn }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const { activateBrowserWallet, account, chainId } = useEthers();

  const executeScroll = (block) => {
    let anchor = document.querySelector(`#${block}`);
    if(block === 'mint' && !anchor){
        anchor = document.querySelector('#timer')
    }
    anchor?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuVisible(false)
  }

  return (
    <header className="container header">
      <div className="header__topbar">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="header__hamburger"
          onClick={() => {
            setIsMobileMenuVisible(true);
          }}
        >
          <img src={hamburger} alt="menu" />
        </button>
      </div>

      <nav className="header__navbar">
        <ul className="header__list">
          <li onClick={() => executeScroll("story")}>Story</li>
          <li onClick={() => executeScroll("roadmap")}>Roadmap</li>
          <li onClick={() => executeScroll("team")}>Team</li>
          <li onClick={() => executeScroll("faq")}>FAQ</li>
          <li onClick={() => executeScroll("mint")}>Mint</li>
          <li>
            <a href={whitepaper} target='_blank'>Whitepaper</a>
          </li>
          <li>
            <a href="https://discord.gg/EUP4xfQwnq" target="_blank">
              <img src={discordLogo} alt="discord" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/SoldierApes" target="_blank">
              <img src={twitterLogo} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://opensea.io/collection/soldier-apes-army-official">
              <img src={openseaLogo} alt="opensea" target="_blank" />
            </a>
          </li>
          <li>
            {account ? (
              <button className="btn btn_meta">
                <img src={metamaskIcon} alt="metamask" />
                {`${account.slice(0, 6)}...${account.slice(
                  account.length - 6,
                  account.length
                )}`}
              </button>
            ) : (
              <button className="btn" onClick={activateBrowserWallet}>
                Connect Metamask
              </button>
            )}
          </li>
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <nav
        className={`header__mobile-menu ${
          isMobileMenuVisible ? "" : "header__mobile-menu_hidden"
        }`}
      >
        <ul className='header__mobile-nav'>
          <li onClick={() => executeScroll('story')}>Story</li>
          <li onClick={() => executeScroll('roadmap')}>Roadmap</li>
          <li onClick={() => executeScroll('team')}>Team</li>
          <li onClick={() => executeScroll('faq')}>FAQ</li>
          <li onClick={() => executeScroll('mint')}>Mint</li>
          <li>
            <a href={whitepaper}>Whitepaper</a>
          </li>
        </ul>
        <div className="header__mobile-social">
          <a href="https://discord.gg/EUP4xfQwnq" target="_blank">
            <img src={discordLogo} alt="discord" />
          </a>
          <a href="https://twitter.com/SoldierApes" target="_blank">
            <img src={twitterLogo} alt="twitter" />
          </a>
          <a href="https://opensea.io/collection/soldier-apes-army-official" target="_blank">
            <img src={openseaLogo} alt="opensea" />
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
