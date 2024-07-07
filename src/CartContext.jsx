import React, { createContext, useContext, useState } from 'react';
import { message } from 'antd';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = () => {
    setCartCount(prevCount => prevCount + 1);
    message.success('Item added to cart successfully!');
  };

  return (
    <CartContext.Provider value={{ cartCount, incrementCart }}>
      {children}
    </CartContext.Provider>
  );
};
