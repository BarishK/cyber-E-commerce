import { FaShippingFast } from "react-icons/fa";
import "./payment.css";
import { useState } from "react";
import { ButtonGroup } from "../Buttons/ButtonGroup";
import { useCartItems } from "../../context/CartItems";
import { ShoppingCartItem } from "../ShoppingCart/ShoppingCartItem";

export function Payment() {
  const [activeTab, setActiveTab] = useState("credit");
  const { cartItems } = useCartItems();

  const paymentTabs = [
    { id: "credit", label: "Credit Card" },
    { id: "paypal", label: "PayPal" },
    { id: "paypalCredit", label: "PayPal Credit" },
  ];

  return (
    <div className="container">
      <div className="step">
        <div className="stepLogo">
          <FaShippingFast />
        </div>
        <div className="stepContent">
          <p>Step 3</p>
          <span>Payment</span>
        </div>
      </div>
      <div className="paymentPage">
        <div className="paymentSummary">
          <div>
            <span className="paymentHeader">Summary</span>
          </div>
          <div className="paymentProducts">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ShoppingCartItem item={item} key={index} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
          <div className="summaryInformation">
            <div>
              <span>Address</span>
              <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
            </div>
            <div>
              <span>Shipment Method</span>
              <p>Free</p>
            </div>
            <div className="paymentTotal">
              <div className="paymentTotalItem">
                <p>Subtotal</p>
                <p>$2347</p>
              </div>
              <div className="paymentTotalItem">
                <p>Estimated Tax</p>
                <p>$50</p>
              </div>
              <div className="paymentTotalItem">
                <p>Estimated shipping & Handling</p>
                <p>$29</p>
              </div>
              <div className="paymentTotalItem">
                <p>Total</p>
                <p>$2426</p>
              </div>
            </div>
          </div>
        </div>
        <div className="payment">
          <div>
            <span className="paymentHeader">Payment</span>
          </div>
          <div className="paymentOptions">
            {paymentTabs.map((tab) => {
              return (
                <button
                  className={`tabButton ${
                    activeTab === tab.id ? "activePaymentOption" : ""
                  }`}
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="creditCard">Kredit karti</div>
          <div className="cardInformation">
            <form className="cardForm">
              <input
                type="text"
                name="name"
                placeholder="Cardholder Name"
                required
              />
              <input
                type="text"
                name="number"
                placeholder="Card Number"
                required
              />
              <div className="row">
                <input
                  type="text"
                  name="expDate"
                  placeholder="Exp. Date"
                  required
                />
                <input type="text" name="cvv" placeholder="CVV" required />
              </div>
            </form>
          </div>
          <div
            className="sameAdressCheck"
            style={{ display: "flex", gap: "8px", alignItems: "center" }}
          >
            <input type="checkbox" />
            <p>Same as billing address</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ButtonGroup
              firstButton={"Back"}
              secondButton={"Pay"}
              page={"payment"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
