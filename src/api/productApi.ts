import api from './index';

export const fetchProducts = (params = {}) => {
  return api.get('/products', { params });
};

export const fetchProductById = (id: string) => {
  return api.get(`/products/${id}`);
};