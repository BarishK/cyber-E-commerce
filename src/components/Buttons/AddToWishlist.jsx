export function AddToWishlist() {
  const addToWishlistStyle = {
    textAlign: "center",
    padding: "16px 56px",
    background: "none",
    border: "1px solid black",
    borderRadius: "6px",
    color: "black",
    fontSize: "16px",
    textWrap: "nowrap",
    cursor: "pointer",
  };
  return <button style={addToWishlistStyle}>Add To Wishlist</button>;
}
