import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ProductIdProvider } from "./context/productId.jsx";

createRoot(document.getElementById("root")).render(
  <ProductIdProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductIdProvider>
);
