import {ProductController} from './products/product.controller';
import {ProductControllerFirebase} from './products/product.controller.firebase';
import {StockRepository} from './stock/stock.repository';
import {StockRepositoryFirebase} from './stock/stock.repository.firebase';
import {ProductService} from './products/product.service';
import {ProductRepository} from './products/product.repository';
import {ProductRepositoryFirebase} from './products/product.repository.firebase';

export class DependencyFactory {
  getProductController(): ProductController {
    const repo: ProductRepository = new ProductRepositoryFirebase();
    const repoStock: StockRepository = new StockRepositoryFirebase();
    const service: ProductService = new ProductService(repo, repoStock);
    return  new ProductControllerFirebase(service)
  }
}
