import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Cart
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const increaseQty = (id) => setCart(prev => prev.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item));
  const decreaseQty = (id) => setCart(prev => prev.map(item => item.id === id ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 } : item));
  const clearCart = () => setCart([]);


  return (
    <ProductContext.Provider
      value={{
        products, loading,
        cart, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart
       
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
