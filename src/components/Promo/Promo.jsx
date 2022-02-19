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
      </div>
    </section>
  );
};

export default Promo;
