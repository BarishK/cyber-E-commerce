import { FaShippingFast } from "react-icons/fa";

import "./shipmentMethod.css";
import { ButtonGroup } from "../Buttons/ButtonGroup";
import { MdMargin } from "react-icons/md";

export function ShipmentMethod() {
  const today = new Date();
  const fastShipment = new Date(today.setDate(today.getDate() + 2));
  const freeDelivery = new Date(today.setDate(today.getDate() + 19));

  const options = { day: "numeric", month: "long", year: "numeric" };
  const freeDeliveryDate = freeDelivery.toLocaleDateString("en-US", options);
  const fastShipmentDate = fastShipment.toLocaleDateString("en-US", options);

  return (
    <div className="container">
      <div className="step">
        <div className="stepLogo">
          <FaShippingFast />
        </div>
        <div className="stepContent">
          <p>Step 2</p>
          <span>Shipping</span>
        </div>
      </div>
      <div className="shipmentMain">
        <div className="shipmentHeader">
          <p>Shipment Method</p>
        </div>
        <div className="shipmentMethods">
          <div className="shipmentMethod">
            <div className="shipmentMethodLeft">
              <div className="shipmentPrice">
                <div>
                  <input type="checkbox" className="checkbox" />
                </div>
                <div>Free</div>
              </div>
              <div className="shipmentDesc">
                <p>Regulary shipment</p>
              </div>
            </div>

            <div>{freeDeliveryDate}</div>
          </div>
          <div className="shipmentMethod">
            <div className="shipmentMethodLeft">
              <div className="shipmentPrice">
                <div>
                  <input type="checkbox" className="checkbox" />
                </div>
                <div>$8.50</div>
              </div>
              <div className="shipmentDesc">
                <p>Get your delivery as soon as possible</p>
              </div>
            </div>
            <div className="shipmentDate">{fastShipmentDate}</div>
          </div>
          <div className="shipmentMethod">
            <div className="shipmentMethodLeft">
              <div className="shipmentPrice">
                <div>
                  <input type="checkbox" className="checkbox" />
                </div>
                <div>Schedule</div>
              </div>
              <div className="shipmentDesc">
                <p>Pick a date when you want to get your delivery</p>
              </div>
            </div>

            <div>Date</div>
          </div>
        </div>
        <div className="shipmentBtnGroup">
          <ButtonGroup firstButton="Back" secondButton="Next" page="shipment" />
        </div>
      </div>
    </div>
  );
}
