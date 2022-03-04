import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "./assets/css/main.css";
import "./assets/css/fontawesome-all.min.css";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-y73u79kx.us.auth0.com"
      clientId="dWS3h46GuubYUI0MBGFurIEKgkwV2uq8"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
