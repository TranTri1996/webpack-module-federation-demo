import React from "react";
import ReactDOM from "react-dom";
import { CountProvider } from "app1/store";

import App from "./App";

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("root")
);
