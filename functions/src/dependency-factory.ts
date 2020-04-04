import {ProductController} from './products/product.controller';
import {ProductControllerFirebase} from './products/product.controller.firebase';
import {StockRepository} from './stock/stock.repository';
import {StockRepositoryFirebase} from './stock/stock.repository.firebase';
import {ProductService} from './products/product.service';
import {ProductRepository} from './products/product.repository';
import {ProductRepositoryFirebase} from './products/product.repository.firebase';
import {OrderController} from './orders/order.controller';
import {OrderRepository} from './orders/order.repository';
import {OrderRepositoryFirebase} from './orders/order.repository.firebase';
import {OrderService} from './orders/order.service';
import {OrderControllerFirebase} from './orders/order.controller.firebase';

export class DependencyFactory {
  getProductController(): ProductController {
    const repo: ProductRepository = new ProductRepositoryFirebase();
    const repoStock: StockRepository = new StockRepositoryFirebase();
    const service: ProductService = new ProductService(repo, repoStock);
    return new ProductControllerFirebase(service)
  }

  getOrderContoller(): OrderController {
    const orderRepository: OrderRepository = new OrderRepositoryFirebase();
    const stockRepository: StockRepository = new StockRepositoryFirebase();
    const service: OrderService = new OrderService(orderRepository, stockRepository);
    return new OrderControllerFirebase(service);
  }
}
