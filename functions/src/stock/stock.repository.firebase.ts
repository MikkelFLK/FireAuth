import {StockRepository} from './stock.repository';
import {Products} from '../models/products';
import {Stock} from '../models/stock';
import * as admin from 'firebase-admin';

export class StockRepositoryFirebase implements StockRepository{
  stockPath = 'stock';

  async createStock(product: Products, number: number): Promise<Stock> {
    const stock: Stock = {product: product, Amount: number};
    await this.db().doc(`${this.stockPath}/${product.id}`).set(stock);
    return Promise.resolve(stock);
  }

  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }

  async lowerStock(product: Products, amount: number): Promise<void> {
    const doc = await this.db().collection(`${this.stockPath}`)
      .doc(`${product.id}`)
      .get();
    const stock = doc.data() as Stock;
    stock.Amount = stock.Amount - amount;
    await this.db().doc(`${this.stockPath}/${product.id}`).set(stock);
    return Promise.resolve();
  }
}
