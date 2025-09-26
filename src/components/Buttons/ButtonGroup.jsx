import { useNavigate } from "react-router-dom";

export function ButtonGroup({ firstButton, secondButton, page }) {
  const buttonStyle = {
    textAlign: "center",
    padding: "16px 56px",
    width: "186px",
    height: "56px",
    background: "none",
    border: "1px solid black",
    borderRadius: "6px",
    color: "black",
    fontSize: "16px",
    textWrap: "nowrap",
    cursor: "pointer",
  };
  const buttonStyleDark = {
    textAlign: "center",
    padding: "16px 56px",
    width: "186px",
    height: "56px",
    background: "black",
    border: "1px solid black",
    borderRadius: "6px",
    color: "white",
    fontSize: "16px",
    textWrap: "nowrap",
    cursor: "pointer",
  };

  const navigate = useNavigate();

  const backToAddress = () => {
    navigate("/addresses");
  };

  const handleBackClick = () => {
    if (page === "address") {
      navigate("/shoppingCart");
    } else if (page === "shipment") {
      navigate("/addresses");
    } else {
      navigate("/shipment");
    }
  };

  const handleNextClick = () => {
    if (page === "address") {
      navigate("/shipment");
    } else if (page === "shipment") {
      navigate("/payment");
    } else {
      navigate("/paymentSuccess?");
    }
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button style={buttonStyle} onClick={handleBackClick}>
        {firstButton}
      </button>
      <button style={buttonStyleDark} onClick={handleNextClick}>
        {secondButton}
      </button>
    </div>
  );
}
