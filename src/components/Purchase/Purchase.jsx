import React, { useState } from "react";
import "./Purchase.scss";
import purchaseKong from "../../assets/images/mint.png";
import { useEtherBalance, useEthers } from "@usedapp/core";
import {
  useBuyTokens,
  useTokenPrice,
  useTotalSupply,
} from "../../assets/contract";
import Modal from "../Modal/Modal";

const Purchase = () => {
  const MAX_TOKENS_AMOUNT = 3;
  const { activateBrowserWallet, account, error } = useEthers();

  const [inputValue, setInputValue] = useState(1);

  const [isAmountPopup, setAmountPopup] = useState(false);
  const [isBalancePopup, setIsBalancePopup] = useState(false);

  const { state: buyState, send: buyTokens } = useBuyTokens();

  const userBalance = useEtherBalance(account);
  const tokenPrice = useTokenPrice();

  const totalSupply = useTotalSupply();

  console.log("totalSupply", totalSupply);
  const increaseHandler = (e) => {
    if (inputValue !== MAX_TOKENS_AMOUNT) {
      setInputValue((prev) => prev + 1);
    } else {
      setAmountPopup(true);
    }
  };

  const decreaseHandler = (e) => {
    if (inputValue > 1) {
      setInputValue((prev) => prev - 1);
    }
  };

  const mintHandler = async (e) => {
    const priceValue = tokenPrice * inputValue;
    if (!account) await activateBrowserWallet();
    if (priceValue > userBalance) {
      setIsBalancePopup(true);
    }
    await buyTokens(inputValue, { value: priceValue.toString() });
  };

  return (
    <>
      <section className="purchase container">
        <h2 className="purchase-title title">MINT IS LIVE</h2>
        <div className="purchase-image">
          <img src={purchaseKong} alt="mint" />
        </div>
        <div className="purchase-info">
          <p className="purchase-price">0.2 ETH</p>
          <p className="purchase-remaining">
            {totalSupply} / 10000 HAVE BEEN MINTED
          </p>
          <p className="purchase-text">
            Pick the amount of NFT's you would like to mint.
          </p>
          <div className="purchase-counter">
            <div className="purchase-counter__minus" onClick={decreaseHandler}>
              -
            </div>
            <div className="purchase-counter__value">{inputValue}</div>
            <div className="purchase-counter__plus" onClick={increaseHandler}>
              +
            </div>
          </div>
        </div>
        <button className="purchase-btn btn" onClick={mintHandler}>
          Mint
        </button>
      </section>
      {isAmountPopup && (
        <Modal
          text={`Yoy may only mint ${MAX_TOKENS_AMOUNT} NFTs.`}
          onClose={() => setAmountPopup(false)}
        />
      )}
      {isBalancePopup && (
        <Modal
          text="You have no enough ethers"
          onClose={() => setIsBalancePopup(false)}
        />
      )}
    </>
  );
};

export default Purchase;
