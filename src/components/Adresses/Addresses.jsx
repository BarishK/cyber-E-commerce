import { FaLocationDot } from "react-icons/fa6";

import "./Addresses.css";
import { Address } from "./Address";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AddressesContext } from "../../context/AddressesContext";
import { ButtonGroup } from "../Buttons/ButtonGroup";

export function Addresses() {
  const navigate = useNavigate();
  const { addresses } = useContext(AddressesContext);

  return (
    <div className="container">
      <div className="step">
        <div className="stepLogo">
          <FaLocationDot />
        </div>
        <div className="stepContent">
          <p>Step 1</p>
          <span>Address</span>
        </div>
      </div>
      <div className="addressesMain">
        <div className="addressHeader">
          <p>Select Address</p>
        </div>
        <div className="addressList">
          {addresses.map((address, index) => (
            <Address key={index} address={address} />
          ))}
        </div>
        <div className="addNewAddress">
          <button
            onClick={() => navigate("/addNewAddress")}
            className="AddNewAddressBtn"
          >
            Add New Address
          </button>
        </div>
      </div>
      <div className="addressesBtnGrp">
        <ButtonGroup
          firstButton={"Back"}
          secondButton={"Next"}
          page={"address"}
        />
      </div>
    </div>
  );
}
