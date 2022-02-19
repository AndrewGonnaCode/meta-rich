import React from "react";
import "./promo.scss";
import banner from "../../assets/images/kong.png";
import bg from "../../assets/images/new/bg.jpeg";
import promoLogo from "../../assets/images/new/logo.png";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-bg">
        <img src={promoLogo} alt="" className="promo-logo" />
        <div className="promo-info">
          <p className="promo-info__price text-shadow">Mint price @ 0.1 ETH</p>
          <div className="promo-info__status text-shadow">
            <p className="text-shadow">Public sale is now Live.</p>
            <p className="text-shadow">You can proceed to minting.</p>
          </div>
          <button className="btn">CONNECT WALLET</button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
