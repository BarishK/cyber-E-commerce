import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Products } from "./components/Products/Products";
import { Product } from "./components/Product/Product";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Addresses } from "./components/Adresses/Addresses";
import { AddNewAddress } from "./components/Adresses/AddNewAddress";
import { ShipmentMethod } from "./components/ShipmentMethod/ShipmentMethod";
import { Payment } from "./components/Payment/Payment";
import { PaymentSuccess } from "./components/PaymentSuccess";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/addNewAddress" element={<AddNewAddress />} />
        <Route path="/shipment" element={<ShipmentMethod />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentSuccess?" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
