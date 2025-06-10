import chair1 from "../assets/imgs/chair1.jpg"

import { v4 as uuid } from "uuid";

export const products = [];

const baseProduct = {
  _id: "550e8400-e29b-41d4-a716-446655440001",
  name: "オフィスチェア",
  price: 1000,
  img: chair1,
  description: "メッシュ素材でムレにくく、長時間座っても快適。多彩な機能で自分好みのチェアにできる。",
  color: "ホワイト",
  stock: 20,
  category: "strage_furniture",
  rating: 3.5
}

for (let i = 0; i < 20; i++) {
  const newProduct = {
    ...baseProduct,
    _id: uuid(),
    price: 500 + i * 1000
  }
  products.push(newProduct);
};