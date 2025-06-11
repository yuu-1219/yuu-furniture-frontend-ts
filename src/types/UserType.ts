import { type OrderType } from './OrderType';
import { type FavoriteType } from './FavoriteType';


export interface UserType {
  _id?: string;
  name: string | null;
  email: string | null;
  password?: string | null; 
  orders: OrderType[];
  favorites: FavoriteType[];
}