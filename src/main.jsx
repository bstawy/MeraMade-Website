import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./context/ThemeContext.jsx";

import App from "./App.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      {/* basename is here for github pages */}
      <BrowserRouter basename="/MeraMade-Website/">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
