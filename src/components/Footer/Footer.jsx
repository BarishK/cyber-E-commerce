import "./Footer.css";
import LogoLight from "../../logos/LogoLight.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <footer className="container">
      <div className="footerMain">
        <div className="footerContent">
          <img src={LogoLight} />
          <p>
            We are a residential interior design firm located in Portland. Our{" "}
            <br />
            boutique-studio offers more than
          </p>
        </div>
        <div className="footerServices">
          <p className="footerSubtitle">
            <b>Services</b>
          </p>
          <ul>
            <li>Bonus Program</li>
            <li>Gift Cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className="footerAssistanceBuyer">
          <p className="footerSubtitle">
            <b>Assistance to the buyer</b>
          </p>
          <ul>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
      <div className="footerSocialMedias">
        <FaTwitter className="footerIcon" />
        <FaFacebookF className="footerIcon" />
        <FaTiktok className="footerIcon" />
        <AiFillInstagram className="footerIcon" />
      </div>
    </footer>
  );
}
