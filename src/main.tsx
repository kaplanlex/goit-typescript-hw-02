import "modern-normalize";
import "./index.css";

import React, { StrictMode } from "react";

import App from "./components/App";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
