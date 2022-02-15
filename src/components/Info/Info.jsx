import React from "react";
import "./Info.scss";
import metamaskIcon from "../../assets/images/metamask.png";
import etherIcon from "../../assets/images/ether.png";
import bananaIcon from "../../assets/images/banana.png";

const Info = () => {
  return (
    <section className="info container">
      <h2 className="info-title title">HOW TO GET A META RICH</h2>
      <p className="info-text">
        New to NFTs? No worries, here are some steps <br /> on what you need to
        do to get your Meta Rich
      </p>
      <div className="info-row">
        <div className="info-col">
          <div className="info-col__icon">
            <img src={metamaskIcon} alt="metamask" />
          </div>
          <div className="info-col__name">DOWNLOAD METAMASK</div>
          <p className="info-col__text">
            The Chrome Metamask extension will allow you to make purchases with
            Ethereum. If you are on mobile, please use the Metamask app.
          </p>
        </div>
        <div className="info-col">
          <div className="info-col__icon">
            <img src={etherIcon} alt="ether" />
          </div>
          <div className="info-col__name">ADD SOME ETH</div>
          <p className="info-col__text">
            The Chrome Metamask extension will allow you to make purchases with
            Ethereum. If you are on mobile, please use the Metamask app.
          </p>
        </div>
        <div className="info-col">
          <div className="info-col__icon">
            <img src={bananaIcon} alt="banana" />
          </div>
          <div className="info-col__name">MINT A NFT</div>
          <p className="info-col__text">
            The Chrome Metamask extension will allow you to make purchases with
            Ethereum. If you are on mobile, please use the Metamask app.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
