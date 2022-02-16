import React from "react";
import Collapsible from "react-collapsible";
import "./faq.scss";
import arrow from "../../assets/images/arrow.svg";

const FAQ = () => {
  return (
    <section id="faq" className="container faq wow fadeInUp">
      <h2 className="faq-title title">F.A.Q</h2>
      <div className="faq-subtitle">
        New to NFTs? No worries, here are some steps on what you <br /> need to
        do to get your Meta Rich
      </div>
      <div className="faq__wrapper">
        <Collapsible
          open
          trigger={
            <div className="faq__item-header">
              <h4>What is NFT?</h4>
              <div className="symbol plus">
                <img src={arrow} alt="" />
              </div>
              <div className="symbol minus">
                <img src={arrow} alt="" />
              </div>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            NFT stands for 'non-fungible token. An NFT is basically data that is
            accounted for in a digital ledger, and that data represents
            something specific and unique. An NFT can, for example, represent a
            unique piece of art or a game token.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>How can I buy a supreme kong?</h4>
              <span className="symbol plus">
                <img src={arrow} alt="" />
              </span>
              <span className="symbol minus">
                <img src={arrow} alt="" />
              </span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            You will be able to buy on our website when we launch. Join our
            discord to have more information about our launch date.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>WHAT DOES “MINT” MEAN?</h4>
              <span className="symbol plus">
                <img src={arrow} alt="" />
              </span>
              <span className="symbol minus">
                <img src={arrow} alt="" />
              </span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            NFT Minting is the process by which your digital art or digital
            content becomes a part of the Ethereum blockchain.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>HOW MUCH DOES IT COST BUY ONE OF THE SUPREME KONG?</h4>
              <span className="symbol plus">
                <img src={arrow} alt="" />
              </span>
              <span className="symbol minus">
                <img src={arrow} alt="" />
              </span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            The Price of Minting and Sale will 0.2 ETH + GAS FEE’S
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

export default FAQ;
