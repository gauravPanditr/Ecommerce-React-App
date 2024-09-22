import { Product } from './product';

export interface CartItem extends Product {
  productId:number,
  quantity: number;
}

export interface CartState {
  userId: number;
  date: string;
  products: CartItem[];
}