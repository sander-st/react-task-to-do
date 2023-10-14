import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProviderTask } from "./context/ProviderTask";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <ProviderTask>
      <App />
    </ProviderTask>
  </React.StrictMode>
);
