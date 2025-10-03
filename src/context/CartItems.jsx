import { createContext, useState, useContext } from "react";

// 1. Context oluştur
const CartItemsContext = createContext();

// 2. Provider component
export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};

// 3. Custom hook (isteğe bağlı ama kullanışlı)
export const useCartItems = () => useContext(CartItemsContext);
