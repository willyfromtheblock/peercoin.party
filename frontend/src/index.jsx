import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/browser";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: "https://073d02f1e1e643018c96f7ea08ad9f82@sentry.io/1764111"
  });
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
