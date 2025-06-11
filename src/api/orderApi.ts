import api from './index';

import { type OrderType } from "../types/OrderType";

export const createOrder = (orderData: OrderType ) => {
  return api.post('/orders', orderData);
};

export const fetchOrderHistory = (userId: string) => {
  return api.get('/orders', { params: { userId } });
};