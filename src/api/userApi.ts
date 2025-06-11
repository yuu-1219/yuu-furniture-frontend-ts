import api from './index';

import { type UserType } from "../types/UserType";

export const registerUser = (userData: UserType) => {
  return api.post('/users/register', userData);
};

export const loginUser = (credentials: string) => {
  return api.post('/users/login', credentials);
};