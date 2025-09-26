import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import "./Address.css";
import { useContext } from "react";
import { AddressesContext } from "../../context/AddressesContext";

export function Address({ address }) {
  const { addressName, fullAddress, telNumber } = address;
  const { addresses, setAddresses } = useContext(AddressesContext);

  const handleDelete = () => {
    setAddresses(addresses.filter((a) => a !== address));
  };

  return (
    <div className="address">
      <div className="addressLeft">
        <div>
          <input type="checkbox" className="checkbox" />
        </div>
        <div className="addressContent">
          <p className="addressName">{addressName}</p>
          <p className="addressInfo">{fullAddress}</p>
          <p className="addressPhone">{telNumber}</p>
        </div>
      </div>
      <div className="addressRight">
        <div className="addressBtnGroup">
          <button>
            <FaPencilAlt className="iconInButton" />
          </button>
          <button onClick={handleDelete}>
            <MdOutlineDelete className="iconInButton" />
          </button>
        </div>
      </div>
    </div>
  );
}
