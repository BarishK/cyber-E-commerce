import { useCartItems } from "../../context/CartItems";

export function AddToCard({ product }) {
  const addToCardStyle = {
    textAlign: "center",
    padding: "16px 56px",
    background: "none",
    border: "1px solid black",
    borderRadius: "6px",
    color: "white",
    backgroundColor: "black",
    fontSize: "16px",
    textWrap: "nowrap",
    cursor: "pointer",
  };

  const { setCartItems } = useCartItems();

  const handleClick = () => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <button style={addToCardStyle} onClick={handleClick}>
      Add To Card
    </button>
  );
}
