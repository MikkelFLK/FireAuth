import {Products} from './products';

export interface Stock {
  id?: string;
  product: Products;
  Amount: number;
}
