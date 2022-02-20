import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TokenContentProvider } from "./store/token-provider";

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <TokenContentProvider>
      <App />
    </TokenContentProvider>
  </BrowserRouter>,
  /*</React.StrictMode>*/ document.getElementById("root")
);
