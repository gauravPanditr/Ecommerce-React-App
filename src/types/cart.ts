import { Product } from './product';

export interface CartItem extends Product {
  productId:number,
  quantity: number;
}

export interface Cart {
  
  date: string;
  products: CartItem[];
}