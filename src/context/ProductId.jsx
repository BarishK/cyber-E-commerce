import { createContext, useContext, useState } from "react";

const ProductIdContext = createContext();

export function ProductIdProvider({ children }) {
  const [productId, setProductId] = useState();

  return (
    <ProductIdContext.Provider value={{ productId, setProductId }}>
      {children}
    </ProductIdContext.Provider>
  );
}

export function useProductId() {
  const context = useContext(ProductIdContext);
  if (!context) {
    throw new Error("useProductId must be used within a CountProvider");
  }
  return context;
}
