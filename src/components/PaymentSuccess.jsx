import { IoCheckmarkDoneCircle } from "react-icons/io5";

export function PaymentSuccess() {
  const paymentSuccessPageStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    margin: "64px",
  };

  return (
    <div className="paymentSuccessPage" style={paymentSuccessPageStyle}>
      <div className="paymentSuccess">
        <div className="successIcon">
          <IoCheckmarkDoneCircle style={{ width: "360px", height: "360px" }} />
        </div>
        <div className="successDesc">
          <p style={{ fontSize: "24px", fontWeight: "600" }}>
            Payment Successful!
          </p>
        </div>
      </div>
    </div>
  );
}
