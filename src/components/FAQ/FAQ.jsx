import React from "react";
import Collapsible from "react-collapsible";
import "./faq.scss";

const FAQ = () => {
  return (
    <section id="faq" className="container faq wow fadeInUp">
      <div className="faq__wrapper">
        <Collapsible
          open
          trigger={
            <div className="faq__item-header">
              <h4>Why should I join the Soldier Apes Army</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            Each Soldier Ape is uniquely created and carefully designed by
            highly experienced artists by overlaying various pre-designed
            attributes on the base Soldier Ape character. <br />
            <br />
            2.5% from the "second-market royalties" will be dedicated to a
            special Army Wallet for monthly prizes. Soldiers Ape NFT owners will
            get exclusive access to our play-to-earn game and Discord Army base.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>How many Soldiers Ape can I mint?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            You will be able to mint a maximum of 100 Soldier Apes NFT per
            wallet and 10 per transaction. <br /> There will be a maximum of
            10,000 Soldier Apes NFTs available for mint for the whole project.{" "}
            <br />
            Pre-Sale maximum of 3 Soldier Apes NFT per wallert.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>Where can I view my NFT?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            Once minted, the Soldier Apes Army NFT (ERC-721) token will be added
            to your wallet which you can check via the Ethereum blockchain.{" "}
            <br />
            <br /> You will also be able to view the NFT on OpenSea.io once the
            listing is approved
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>Is there a presale?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            Yes, there is a presale which you need to win a whitelist entry.{" "}
            <br />
            <br />
            There will be a total of 1000 members who will be able to be
            whitelisted for presale. To be eligible for the presale check our
            discord on how to get whitelisted.
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>What about the Mint price?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            PreSale is 0.08 ETH + gas fee <br />
            <br /> Public Sale is 0.12 ETH + gas fee
          </p>
        </Collapsible>

        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>When will I be able to mint the Soldier Apes?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">
            Pre-Sale February 14th 6pm CET <br />
            Public Sale February 16th 6 pm CET
          </p>
        </Collapsible>
        <Collapsible
          trigger={
            <div className="faq__item-header">
              <h4>Which Wallet can I connect to Mint Soldier Ape?</h4>
              <span className="symbol plus">+</span>
              <span className="symbol minus">-</span>
            </div>
          }
          transitionTime={200}
          openedClassName="faq__item-open"
        >
          <p className="faq__text">You can connect MetaMask wallet only</p>
        </Collapsible>
      </div>

      <div className="title faq__join">
        Join us on our online channels to stay up-to-date with the Soldier Apes
        Army community
      </div>
    </section>
  );
};

export default FAQ;
