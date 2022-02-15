import React from "react";
import "./Purchase.scss";
import purchaseKong from "../../assets/images/mint.png";

const Purchase = () => {
  return (
    <section className="purchase container">
      <h2 className="purchase-title title">MINT IS LIVE</h2>
      <div className="purchase-image">
        <img src={purchaseKong} alt="mint" />
      </div>
      <div className="purchase-info">
        <p className="purchase-price">0.2 ETH</p>
        <p className="purchase-remaining">1271 / 2000 HAVE BEEN MINTED</p>
        <p className="purchase-text">
          Pick the amount of NFT's you would like to mint.
        </p>
        <div className="purchase-counter">
          <div className="purchase-counter__minus">-</div>
          <div className="purchase-counter__value">1</div>
          <div className="purchase-counter__plus">+</div>
        </div>
      </div>
      <button className="purchase-btn btn">Mint</button>
    </section>
  );
};

export default Purchase;
