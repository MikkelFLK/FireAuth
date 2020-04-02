import {ProductRepository} from './product.repository';
import {Products} from '../models/products';
import {StockRepository} from '../stock/stock.repository';


export class ProductService {

  constructor(private productRepository: ProductRepository, private stockRepository: StockRepository) {
    console.log(this.productRepository);
  }

  async createProduct(product: Products): Promise<Products> {
        await this.stockRepository.createStock(product, 5);
        return Promise.resolve(product);
  }
}
