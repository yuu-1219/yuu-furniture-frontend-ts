import api from './index';

export const createOrder = (orderData) => {
  return api.post('/orders', orderData);
};

export const fetchOrderHistory = (userId) => {
  return api.get('/orders', { params: { userId } });
};