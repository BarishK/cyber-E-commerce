import { createContext, useState } from "react";

export const AddressesContext = createContext();

export function AddressesProvider({ children }) {
  const [addresses, setAddresses] = useState([]);

  return (
    <AddressesContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressesContext.Provider>
  );
}
