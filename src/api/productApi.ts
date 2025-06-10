import api from './index';

// 商品一覧取得
export const fetchProducts = (params = {}) => {
  return api.get('/products', { params });
};

// 商品詳細
export const fetchProductById = (id) => {
  return api.get(`/products/${id}`);
};