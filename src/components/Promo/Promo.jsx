import React from "react";
import "./promo.scss";
import banner from "../../assets/images/kong.png";

const Promo = () => {
  return (
    <section className="promo">
      <h2 className="promo-title title">
        THE SUPREME LEADERS <br /> OF THE METAVERSE{" "}
      </h2>
      <div className="promo__bg">
        <img src={banner} alt="banner" />
      </div>
    </section>
  );
};

export default Promo;
