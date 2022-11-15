import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "./helpers.scss";
import "./SectionPromo.scss";
import "./Buttons.scss";
import "./Typography.scss";
import "./Form.scss";
import "./index.scss";
import "./App.scss";
import "./Footer.scss";
import "./Dropdown.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
