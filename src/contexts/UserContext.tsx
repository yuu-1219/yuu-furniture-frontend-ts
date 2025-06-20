import axios from "axios";
import { createContext, useState, useContext } from "react";
import { type PropsWithChildren, type Dispatch, type SetStateAction } from 'react';

import { type UserType } from '../types/UserType';
import { type OrderType } from '../types/OrderType';
import { type FavoriteType } from '../types/FavoriteType';
import { type CartType, type CartItemType } from '../types/CartType';

const UserUrl: string = `${import.meta.env.VITE_API_BASE_URL}/user`;

export interface UserContextType {
  isAuthenticated: boolean;
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
  registerUser: (userInfo: UserType, password: string) => Promise<UserType>;
  login: (email: string, password: string) => Promise<UserType | null>;
  logout: () => void;
  changeUserInfo: (userId: string, name: string, email: string) => Promise<UserType | null>;
  changeUserPassword: (userId: string, newPassword: string) => Promise<UserType | null>;
  deleteUserInfo: (userId: string) => Promise<void>;
  handlePurchase: (cart: CartType) => Promise<{ orderId: string, purchasedAt: string } | null>;
  addFavorite: (userId: string, productId: string, color: string) => Promise<UserType | null>;
  removeFavorite: (userId: string, productId: string, color: string) => Promise<UserType | null>;
  toggleFavorite: (userId: string | null, productId: string, color: string) => Promise<UserType | null>;
}

const UserContext = createContext<UserContextType | null>(null);


export function UserProvider({ children }: PropsWithChildren) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserType | null>(null);


  const registerUser = async (userInfo: UserType, password: string) => {
    const res = await axios.post(UserUrl, { userInfo, password });
    const { email } = res.data;

    try {
      await login(email, password);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "会員登録中にエラーが発生しました";
        alert(message);
      }
    }

    return res.data;
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${UserUrl}/login`, { email, password });
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "ログイン中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };

  const logout = () => {
    setUser({
      // _id: null,
      name: null,
      email: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);
  };

  const changeUserInfo = async (userId: string, name: string, email: string) => {
    if (!user) return;
    const updatedUser: UserType = {
      ...user,
      name: name,
      email: email,
    };


    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, { updatedUser, isPurchase });
      setUser(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "会員情報の変更中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  const changeUserPassword = async (userId: string, newPassword: string) => {
    if (!userId) return null;

    try {
      const res = await axios.put(`${UserUrl}/${userId}/password`, { password: newPassword });
      setUser(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "パスワードの変更中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  const deleteUserInfo = async (userId: string) => {
    setUser({
      // _id: null,
      name: null,
      email: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);

    try {
      const res = await axios.delete(`${UserUrl}/${userId}`);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "アカウント情報の削除中にエラーが発生しました";
        alert(message);
      }
    }
    return null;
  }


  const handlePurchase = async (cart: CartType) => {
    // console.log("OK!");
    const orderId = generateOrderId()

    const newOrder: OrderType = {
      // _id: null,
      orderId: orderId,
      items: cart.items.map((item: CartItemType) => ({
        productId: item.productId,
        quantity: item.quantity,
        color: item.color,
      })),
      totalQty: cart.totalQty,
      totalPrice: cart.totalPrice,
      purchasedAt: new Date().toISOString(),
    };

    if (!user) return null;

    const updatedUser: UserType = {
      ...user,
      orders: [newOrder, ...(user.orders || [])],
    };


    try {
      const isPurchase = 1;
      const res = await axios.put(`${UserUrl}/${user._id}`, { updatedUser, isPurchase, orderId })
      setUser(res.data);
      return { orderId: newOrder.orderId, purchasedAt: newOrder.purchasedAt };
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "購入処理中にエラーが発生しました";
        alert(message);
      }
    }

    return null;
  };


  const generateOrderId = () => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const hhmm = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");

    const random = Math.random().toString(36).slice(-6).toUpperCase();
    return `${yyyymmdd}-${hhmm}-${random}`;
  };



  const addFavorite = async (userId: string, productId: string, color: string) => {
    if (!user) return null;

    const updatedUser: UserType = {
      ...user,
      favorites: [...(user.favorites || []), { productId, color }],
    };


    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, { updatedUser, isPurchase });
      setUser(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "お気に入り登録中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  const removeFavorite = async (userId: string, productId: string, color: string) => {
    if (!user) return null;

    const updatedUser: UserType = {
      ...user,
      favorites: user.favorites.filter(c => !(c.productId === productId && c.color === color))
    };


    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, { updatedUser, isPurchase });
      setUser(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "お気に入り商品の削除中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  const toggleFavorite = async (userId: string | null, productId: string, color: string) => {
    if (!user || !userId) {
      alert("お気に入りリストへの登録にはログインが必要です");
      return null;
    }

    const favorites: FavoriteType[] = user.favorites || [];
    const isAlready = favorites.some(c => c.productId === productId && c.color === color);
    const updatedUser: UserType = {
      ...user,
      favorites: isAlready
        ? favorites.filter(c => !(c.productId === productId && c.color === color))
        : [...(favorites || []), { productId, color }]
    };

    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, { updatedUser, isPurchase });
      setUser(res.data);
      return res.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "お気に入りリストの操作中にエラーが発生しました";
        alert(message);
      }
    }
    return null;

  };


  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        registerUser,
        login,
        logout,
        changeUserInfo,
        changeUserPassword,
        deleteUserInfo,
        handlePurchase,
        addFavorite,
        removeFavorite,
        toggleFavorite
      }}
    >
      {children}
    </UserContext.Provider>
  );


}

export function useUser() {
  return useContext(UserContext);
}