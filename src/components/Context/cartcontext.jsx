import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(item => item.id === product.id);
      
      if (existingProduct) {
        // If the product is already in the cart, update its quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Optional: Function to update the quantity of a specific product in the cart
  const updateQuantity = (productId, value) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + value }
          : item
      ).filter(item => item.quantity > 0) // Remove items with quantity <= 0
    );
  };

  // Optional: Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
