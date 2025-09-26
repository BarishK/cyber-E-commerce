import "./styles/shoppingCartItem.css";

export function ShoppingCartItem({ item }) {
  return (
    <div className="shoppingCartItem">
      <div className="cartItemImage">
        <p>image</p>
      </div>
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4 className="cartItemName">
            Apple iPhone 14 Pro Max 128Gb Deep Purple
          </h4>
          <p className="cartItemId">#25139526913984</p>
        </div>
        <div className="cartItemCount">- 0 +</div>
        <div className="cartItemPrice">$1399</div>
        <div className="cartItemDelete">X</div>
      </div>
    </div>
  );
}
