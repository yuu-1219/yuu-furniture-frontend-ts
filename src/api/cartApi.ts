import api from './index';

export const addToCartAPI = (item) => {
  return api.post('/cart', item);
};

export const removeFromCartAPI = (productId) => {
  return api.delete(`/cart/${productId}`);
};