import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ProductIdProvider } from "./context/productId.jsx";
import { CartItemsProvider } from "./context/CartItems.jsx";
import { AddressesProvider } from "./context/AddressesContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartItemsProvider>
    <ProductIdProvider>
      <AddressesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AddressesProvider>
    </ProductIdProvider>
  </CartItemsProvider>
);
