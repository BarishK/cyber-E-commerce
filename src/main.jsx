import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductIdProvider } from "./context/productId.jsx";
import { CartItemsProvider } from "./context/CartItems.jsx";
import { AddressesProvider } from "./context/AddressesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartItemsProvider>
      <ProductIdProvider>
        <AddressesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AddressesProvider>
      </ProductIdProvider>
    </CartItemsProvider>
  </StrictMode>
);
