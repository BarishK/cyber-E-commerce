import { ShoppingCartItem } from "./ShoppingCartItem";
import "./styles/shoppingCart.css";
import { useCartItems } from "../../context/CartItems";
import { useNavigate } from "react-router-dom";

export function ShoppingCart() {
  const { cartItems } = useCartItems();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="shoppingCartPage">
        <div className="shoppingCart">
          <div className="cartHeader">
            <h3>Shopping Cart</h3>
          </div>
          <div className="cartList">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ShoppingCartItem item={item} key={index} />
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
        <div className="orderSummary">
          <div className="orderSummaryHeader">
            <h3>Order Summary</h3>
          </div>
          {/* FORM */}
          <div className="orderSummaryForm">
            <div className="inputArea">
              <div className="discountCodeInput inputItem">
                <label>Discount code / Promo code</label>
                <input type="text" placeholder="Code" />
              </div>
              <div className="bonusCardInput inputItem">
                <label>Your bonus card number</label>
                <input type="text" placeholder="Enter Card Number" />
              </div>
            </div>
            <div className="subtotalArea">
              <div className="subtotalCost subtotalItem">
                <p>Subtotal</p>
                <p>$2347</p>
              </div>
              <div className="taxAndShippingCost">
                <div className="taxCost subtotalItem">
                  <p>Estimated Tax</p>
                  <p>$50</p>
                </div>
                <div className="shippingCost subtotalItem">
                  <p>Estimated shipping & Handling</p>
                  <p>$29</p>
                </div>
              </div>
              <div className="totalCost subtotalItem">
                <p>Total</p>
                <p>$2426</p>
              </div>
            </div>
            <button
              className="checkoutBtn"
              onClick={() => navigate("/addresses")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
