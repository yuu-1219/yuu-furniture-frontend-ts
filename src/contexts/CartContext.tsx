import axios from "axios";

import { createContext, useState, useContext } from "react";

import { useUser } from "./UserContext";

const CartUrl = `${import.meta.env.VITE_API_BASE_URL}/cart`;

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    userId: null,
    items: [],
    totalQty: 0,
    totalPrice: 0,
    updatedAt: null
  });

  const registerCart = async (cartData) => {
    const res = await axios.post(CartUrl, cartData);
    return res.data;
  };

  const resetCart = () => {
    setCart({
      userId: null,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: null,
    });
  };

  const getCart = async (userId) => {
    try {
      const res = await axios.get(`${CartUrl}/${userId}`);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カート情報の取得中にエラーが発生しました";
      alert(message);
    }
  };


  const addToCart = async (productId, color, qty, price) => {
    const existingItemIndex = cart.items.findIndex(
      c => c.productId === productId && c.color === color
    );

    let updatedItems;

    if (existingItemIndex !== -1) {
      updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += qty;
    } else {
      updatedItems = [...cart.items, { productId: productId, color: color, quantity: qty }];
    }

    const updatedCart = {
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty + qty,
      totalPrice: cart.totalPrice + qty * price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    if (!updatedCart.userId) return null;

    try {
      const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カートへの追加中にエラーが発生しました";
      alert(message);
    }
  };


  const removeFromCart = async (productId, color, price) => {
    const targetItem = cart.items.find(
      c => c.productId === productId && c.color === color
    );
    // if (!targetItem) return;

    const updatedItems = cart.items.filter(
      c => !(c.productId === productId && c.color === color)
    );

    const updatedCart = {
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty - targetItem.quantity,
      totalPrice: cart.totalPrice - price * targetItem.quantity,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    if (!updatedCart.userId) return null;

    try {
      const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "商品の削除中にエラーが発生しました";
      alert(message);
    }
  };

  const incrementItem = async (productId, color, price) => {
    const updatedItems = cart.items.map(c => {
      if (c.productId === productId && c.color === color) {
        return { ...c, quantity: c.quantity + 1 };
      }
      return c;
    });

    const targetItem = cart.items.find(c => c.productId === productId && c.color === color);

    const updatedCart = {
      ...cart,
      items: updatedItems,
      totalQty: cart.totalQty + 1,
      totalPrice: cart.totalPrice + price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    if (!updatedCart.userId) return null;

    try {
      const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カートの操作中にエラーが発生しました";
      alert(message);
    }
  };

  const decrementItem = async (productId, color, price) => {
    const targetItem = cart.items.find(
      c => c.productId === productId && c.color === color
    );
    if (!targetItem) return;

    let updatedItems;
    if (targetItem.quantity === 1) {
      return;
    } else {
      updatedItems = cart.items.map(c => {
        if (c.productId === productId && c.color === color) {
          return { ...c, quantity: c.quantity - 1 };
        }
        return c;
      });
    }

    const updatedCart = {
      ...cart,
      // userId: userId,
      items: updatedItems,
      totalQty: cart.totalQty - 1,
      totalPrice: cart.totalPrice - price,
      updatedAt: new Date().toISOString()
    };

    setCart(updatedCart);

    if (!updatedCart.userId) return null;

    try {
      const res = await axios.put(`${CartUrl}/${updatedCart.userId}`, updatedCart);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カートの操作中にエラーが発生しました";
      alert(message);
    }
  };


  const clearCart = async (userId) => {
    const clearedCart = {
      // cartId: cart.cartId,
      userId: userId,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: new Date().toISOString()
    };

    setCart(clearedCart);

    try {
      const res = await axios.put(`${CartUrl}/${userId}`, clearedCart);
      setCart(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カート情報の操作中にエラーが発生しました";
      alert(message);
    }

  };

  const deleteCart = async (userId) => {
    setCart({
      userId: null,
      items: [],
      totalQty: 0,
      totalPrice: 0,
      updatedAt: new Date().toISOString()
    });

    try {
      const res = await axios.delete(`${CartUrl}/${userId}`);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "カート情報の削除中にエラーが発生しました";
      alert(message);
    }
  }

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      registerCart,
      resetCart,
      getCart,
      addToCart,
      removeFromCart,
      incrementItem,
      decrementItem,
      clearCart,
      deleteCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}