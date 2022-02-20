import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ChainId, DAppProvider } from "@usedapp/core";

const config = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      "https://eth-rinkeby.alchemyapi.io/v2/s7titfsaf8g6AoChMSL2xQU3cBJkbIM3",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
