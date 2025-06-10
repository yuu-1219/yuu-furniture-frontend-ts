import axios from "axios";

import { createContext, useState, useContext } from "react";

const UserUrl = `${import.meta.env.VITE_API_BASE_URL}/user`;

const UserContext = createContext();


export function UserProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const register = async (userInfo, password) => {
    const res = await axios.post(UserUrl, { userInfo, password });
    const { email } = res.data;

    try {
      await login(email, password);
    } catch (e) {
      const message = e.response?.data?.message || "会員登録中にエラーが発生しました";
      alert(message); 
    }

    return res.data;
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${UserUrl}/login`, { email, password });
      setUser(res.data);
      setIsAuthenticated(true);
      return res.data
    } catch (e) {
      const message = e.response?.data?.message || "ログイン中にエラーが発生しました";
      alert(message);
    }

  };

  const logout = () => {
    setUser({
      name: null,
      email: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);
  };

  const changeUserInfo = async (userId, name, email) => {
    const updatedUser = {
      ...user,
      name: name,
      email: email,
    };

    // setUser(updatedUser);

    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, {updatedUser, isPurchase});
      setUser(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "会員情報の変更中にエラーが発生しました";
      alert(message);
    }
  };


  const changeUserPassword = async (userId, newPassword) => {
    if (!userId) return null;

    try {
      const res = await axios.put(`${UserUrl}/${userId}/password`, { password: newPassword });
      setUser(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "パスワードの変更中にエラーが発生しました";
      alert(message);
    }
  };


  const deleteUserInfo = async () => {
    setUser({
      name: null,
      email: null,
      password: null,
      orders: [],
      favorites: []
    });
    setIsAuthenticated(false);

    try {
      const res = await axios.delete(`${UserUrl}/${user._id}`);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "アカウント情報の削除中にエラーが発生しました";
      alert(message);

    }
  }


  const handlePurchase = async (cart) => {
    if (!user) return null;

    const orderId = generateOrderId()

    const newOrder = {
      orderId: orderId,
      items: cart.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        color: item.color,
      })),
      totalQty: cart.totalQty,
      totalPrice: cart.totalPrice,
      purchasedAt: new Date().toISOString(),
    };


    const updatedUser = {
      ...user,
      orders: [newOrder, ...(user.orders || [])],
    };

    // setUser(updatedUser);

    try {
      const isPurchase = 1;
      const res = await axios.put(`${UserUrl}/${user._id}`, {updatedUser, isPurchase, orderId})
      setUser(res.data);
      return { orderId: newOrder.orderId, purchasedAt: newOrder.purchasedAt };
    } catch (e) {
      const message = e.response?.data?.message || "購入処理中にエラーが発生しました";
      alert(message);
    }
  };

  const generateOrderId = () => {
    const now = new Date();
    const yyyymmdd = now.toISOString().slice(0, 10).replace(/-/g, "");
    const hhmm = now.getHours().toString().padStart(2, "0") + now.getMinutes().toString().padStart(2, "0");

    const random = Math.random().toString(36).slice(-6).toUpperCase();
    return `${yyyymmdd}-${hhmm}-${random}`;
    // return `${yyyymmdd}-${hhmm}`;
  };



  const addFavorite = async (userId, productId, color) => {
    const updatedUser = {
      ...user,
      favorites: [...(user.favorites || []), { productId, color }],
    };

    // setUser(updatedUser);

    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, {updatedUser, isPurchase});
      setUser(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "お気に入り登録中にエラーが発生しました";
      alert(message);
    }
  };


  const removeFavorite = async (userId, productId, color) => {
    const updatedUser = {
      ...user,
      favorites: user.favorites.filter(c => !(c.productId === productId && c.color === color))
    };

    // setUser(updatedUser);

    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, {updatedUser, isPurchase});
      setUser(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "お気に入り商品の削除中にエラーが発生しました";
      alert(message);
    }
  };


  const toggleFavorite = async (userId, productId, color) => {
    // setUser((prevUser) => {
    //   const favorites = prevUser.favorites || [];
    //   const isAlready = favorites.some(c => c.productId === productId && c.color === color);
    //   return {
    //     ...prevUser,
    //     favorites: isAlready
    //       ? favorites.filter(c => !(c.productId === productId && c.color === color))
    //       : [...(favorites || []), { productId, color }]
    //   };
    // });

    const favorites = user.favorites || [];
    const isAlready = favorites.some(c => c.productId === productId && c.color === color);
    const updatedUser = {
      ...user,
      favorites: isAlready
        ? favorites.filter(c => !(c.productId === productId && c.color === color))
        : [...(favorites || []), { productId, color }]
    };

    // setUser(updatedUser);

    if (!userId) return null;

    try {
      const isPurchase = 0;
      const res = await axios.put(`${UserUrl}/${userId}`, {updatedUser, isPurchase});
      setUser(res.data);
      return res.data;
    } catch (e) {
      const message = e.response?.data?.message || "お気に入りリストの操作中にエラーが発生しました";
      alert(message);
    }

  };


  return (
    <UserContext.Provider
      value={{
        isAuthenticated,
        user,
        setUser,
        register,
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