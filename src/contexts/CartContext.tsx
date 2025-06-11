import axios from "axios";
import { createContext, useState, useContext } from "react";
import { type PropsWithChildren, type Dispatch, type SetStateAction } from 'react';

import { type CartType, type CartItemType } from '../types/CartType';

const CartUrl: string = `${import.meta.env.VITE_API_BASE_URL}/cart`;

export interface CartContextType {
  cart: CartType;
  setCart: Dispatch<SetStateAction<CartType>>;
  registerCart: (cartData: CartType) => Promise<CartType | null>;
  resetCart: () => void;
  getCart: (userId: string) => Promise<CartType | null>;
  addToCart: (productId: string, color: string, qty: number, price: number) => Promise<CartType | null>;
  removeFromCart: (productId: string, color: string, price: number) => Promise<CartType | null>;
  incrementItem: (productId: string, color: string, price: number) => Promise<CartType | null>;
  decrementItem: (productId: string, color: string, price: number) => Promise<CartType | null>;
  clearCart: (userId: string) => Promise<CartType | null>;
  deleteCart: (userId: string) => Promise<CartType | null>;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartType>({
    userId: null,
    items: [],
    totalQty: 0,
    totalPrice: 0,
    updatedAt: null
  });

  const registerCart = async (cartData: CartType) => {
    try {
      const res = await axios.post(CartUrl, cartData);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カート情報の登録中にエラーが発生しました";
        alert(message);
      }
    }
    return null;
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

  const getCart = async (userId: string) => {
    try {
      const res = await axios.get(`${CartUrl}/${userId}`);
      setCart(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カート情報の取得中にエラーが発生しました";
        alert(message);
      }
    }
    return null;
  };


  const addToCart = async (productId: string, color: string, qty: number, price: number) => {
    const existingItemIndex = cart.items.findIndex(
      (c: CartItemType) => c.productId === productId && c.color === color
    );

    let updatedItems: CartItemType[];

    if (existingItemIndex !== -1) {
      updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += qty;
    } else {
      updatedItems = [...cart.items, { productId: productId, color: color, quantity: qty }];
    }

    const updatedCart: CartType = {
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カートへの追加中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  const removeFromCart = async (productId: string, color: string, price: number) => {
    const targetItem: CartItemType | undefined = cart.items.find(
      (c: CartItemType) => c.productId === productId && c.color === color
    );

    if (!targetItem) return null;

    const updatedItems: CartItemType[] = cart.items.filter(
      (c: CartItemType) => !(c.productId === productId && c.color === color)
    );

    const updatedCart: CartType = {
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "商品の削除中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };

  const incrementItem = async (productId: string, color: string, price: number) => {
    const updatedItems: CartItemType[] = cart.items.map((c: CartItemType) => {
      if (c.productId === productId && c.color === color) {
        return { ...c, quantity: c.quantity + 1 };
      }
      return c;
    });


    const updatedCart: CartType = {
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カートの操作中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };

  const decrementItem = async (productId: string, color: string, price: number) => {
    const targetItem: CartItemType | undefined = cart.items.find(
      (c: CartItemType) => c.productId === productId && c.color === color
    );
    if (!targetItem) return;

    let updatedItems: CartItemType[];
    if (targetItem.quantity === 1) {
      return;
    } else {
      updatedItems = cart.items.map((c: CartItemType) => {
        if (c.productId === productId && c.color === color) {
          return { ...c, quantity: c.quantity - 1 };
        }
        return c;
      });
    }

    const updatedCart: CartType = {
      ...cart,
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カートの操作中にエラーが発生しました";
        alert(message);
      }
    }
    return null;
  };


  const clearCart = async (userId: string) => {
    const clearedCart: CartType = {
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カート情報の操作中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };

  const deleteCart = async (userId: string) => {
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
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "カート情報の削除中にエラーが発生しました";
        alert(message);
      }
    }
    return null;
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