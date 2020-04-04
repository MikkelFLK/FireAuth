import {Products} from './products';

export interface Orderline {
  id?: string;
  product: Products;
  amount: number;
}
