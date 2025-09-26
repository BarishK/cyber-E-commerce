import React, { useContext, useState } from "react";
import { AddressesContext } from "../../context/AddressesContext";
import { useNavigate } from "react-router-dom";

export function AddNewAddress() {
  const navigate = useNavigate();
  const { addresses, setAddresses } = useContext(AddressesContext);

  const [form, setForm] = useState({
    addressName: "",
    fullAddress: "",
    telNumber: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddresses([...addresses, form]);
    navigate("/addresses");
  };

  return (
    <div style={{ margin: "16px" }}>
      <form>
        <label>Adres ismi</label>
        <input type="text" name="addressName" onChange={handleChange} />
        <label>Tam adres</label>
        <input type="text" name="fullAddress" onChange={handleChange} />
        <label>Telefon numarasi</label>
        <input type="text" name="telNumber" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Kaydet
        </button>
      </form>
    </div>
  );
}
