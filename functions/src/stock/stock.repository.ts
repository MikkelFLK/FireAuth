import {Products} from '../models/products';
import {Stock} from '../models/stock';

export interface StockRepository {

  createStock(product: Products, number: number): Promise<Stock>;


  lowerStock(product: Products, amount: number): Promise<void>;
}
