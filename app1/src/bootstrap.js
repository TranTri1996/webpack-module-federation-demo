import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { CountProvider } from "app1/store";

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("root")
);
