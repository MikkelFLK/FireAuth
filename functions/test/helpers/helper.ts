import {IMock, It, Mock} from 'moq.ts';
import {ProductRepository} from '../../src/products/product.repository';
import {Products} from '../../src/models/products';
import {Stock} from '../../src/models/stock';
import {StockRepository} from '../../src/stock/stock.repository';
import {OrderRepository} from '../../src/orders/order.repository';
import {Orderline} from '../../src/models/orderline';
import {Order} from '../../src/models/order';

export class TestHelper {
  getProductRepositopryMock(): IMock<ProductRepository> {
    return new Mock<ProductRepository>()
      .setup(repo => repo.createProduct(this.getProduct1()))
      .returns(Promise.resolve(this.getProduct1()));
  }

  getStockRepositoryMock(): IMock<StockRepository> {
    return new Mock<StockRepository>()
      .setup(stockRepo => stockRepo.createStock(this.getProduct1(), 5))
      .returns(Promise.resolve(this.getStock1()))
      .setup(stockRepo => stockRepo.lowerStock(It.IsAny(), It.IsAny()))
      .returns(Promise.resolve());
  }

  getOrderRepositoryMock(): IMock<OrderRepository> {
    return new Mock<OrderRepository>()
      .setup(orderRepo => orderRepo.createOrder(this.getOl1(), Date.now()))
      .returns(Promise.resolve(this.getOrder1()));
  }

  getProduct1(): Products {
    return this.product1;
  }

  private getStock1(): Stock {
    return this.stock1;
  }

  getOl1(): Orderline {
    return this.ol1;
  }

  getOrder1(): Order {
    return this.order1;
  }

  stock1: Stock = {
    Amount: 1,
    product: this.getProduct1()
  };

  product1: Products = {
    id: 'p1',
    pName: 'Product1',
    pDescript: 'Test'
  };

  ol1: Orderline = {
    product: this.product1,
    amount: 1
  };

  order1: Order = {
    id: 'o1',
    date: Date.now(),
    orderLines: [this.ol1]
  };

}
