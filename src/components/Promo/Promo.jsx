import React from "react";
import "./promo.scss";
import banner from "../../assets/images/kong.png";
import bg from "../../assets/images/new/bg.jpeg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__bg">
        <img src={bg} alt="banner" />
      </div>
    </section>
  );
};

export default Promo;
