import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/browser";

if (process.env.NODE_ENV !== "development") {
  Sentry.init({
    dsn: "https://073d02f1e1e643018c96f7ea08ad9f82@sentry.io/1764111"
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
