import api from './index';

import { type ProductType } from "../types/ProductType";

export const addToCartAPI = (item : ProductType) => {
  return api.post('/cart', item);
};

export const removeFromCartAPI = (productId: string) => {
  return api.delete(`/cart/${productId}`);
};