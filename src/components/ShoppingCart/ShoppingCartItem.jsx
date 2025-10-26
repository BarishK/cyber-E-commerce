import "./styles/shoppingCartItem.css";

export function ShoppingCartItem({ item }) {
  return (
    <div className="shoppingCartItem">
      <div className="cartItemImageArea">
        <img src={item?.image} alt={item.title} className="cartItemImage" />
      </div>
      <div className="cartItemContent">
        <div className="cartItemHeader">
          <h4 className="cartItemName">{item.title}</h4>
          <p className="cartItemId">#25139526913984</p>
        </div>
        <div className="cartItemCount">- 0 +</div>
        <div className="cartItemPrice">${item.price}</div>
        <div className="cartItemDelete">X</div>
      </div>
    </div>
  );
}
