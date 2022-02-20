import React, { useState } from "react";
import "./promo.scss";
import banner from "../../assets/images/kong.png";
import bg from "../../assets/images/new/bg.jpeg";
import promoLogo from "../../assets/images/new/logo.png";
import { useEtherBalance, useEthers } from "@usedapp/core";
import {
  useBuyTokens,
  useTokenPrice,
  useTotalSupply,
} from "../../assets/contract";
import Modal from "../Modal/Modal";

const Promo = () => {
  const MAX_TOKENS_AMOUNT = 3;
  const { activateBrowserWallet, account, error } = useEthers();

  const [inputValue, setInputValue] = useState(1);

  const [isAmountPopup, setAmountPopup] = useState(false);
  const [isBalancePopup, setIsBalancePopup] = useState(false);

  const { state: buyState, send: buyTokens } = useBuyTokens();

  const userBalance = useEtherBalance(account);
  const tokenPrice = useTokenPrice();

  const totalSupply = useTotalSupply();

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
    if (priceValue > userBalance) {
      setIsBalancePopup(true);
    }
    await buyTokens(inputValue, { value: priceValue.toString() });
  };

  console.log("price", tokenPrice);

  return (
    <section className="promo">
      <div className="promo-bg">
        <img src={promoLogo} alt="" className="promo-logo" />
        <div className="promo-info">
          <p className="promo-info__price text-shadow">Mint price @ 0.1 ETH</p>
          {!account && (
            <div className="promo-info__status text-shadow">
              <p className="text-shadow">Public sale is now Live.</p>
              <p className="text-shadow">You can proceed to minting.</p>
            </div>
          )}
          {account && (
            <div className="purchase-counter">
              <div
                className="purchase-counter__minus"
                onClick={decreaseHandler}
              >
                -
              </div>
              <div className="purchase-counter__value">{inputValue}</div>
              <div className="purchase-counter__plus" onClick={increaseHandler}>
                +
              </div>
            </div>
          )}
          {account ? (
            <button className="btn" onClick={mintHandler}>
              MINT
            </button>
          ) : (
            <button className="btn" onClick={activateBrowserWallet}>
              CONNECT WALLET
            </button>
          )}
        </div>
      </div>
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
    </section>
  );
};

export default Promo;
