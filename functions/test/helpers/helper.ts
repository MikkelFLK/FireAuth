import {IMock, Mock} from 'moq.ts';
import {ProductRepository} from '../../src/products/product.repository';
import {Products} from '../../src/models/products';
import {Stock} from '../../src/models/stock';
import {StockRepository} from '../../src/stock/stock.repository';

export class TestHelper {
  getProductRepositopryMock(): IMock<ProductRepository> {
    return new Mock<ProductRepository>()
      .setup(repo => repo.createProduct(this.getProduct1()))
      .returns(Promise.resolve(this.getProduct1()));
  }

  getStockRepositoryMock(): IMock<StockRepository> {
    return new Mock<StockRepository>()
      .setup(stockRepo => stockRepo.createStock(this.getProduct1(), 5))
      .returns(Promise.resolve(this.getStock1()));
  }

  getProduct1(): Products {
    return this.product1;
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

  private getStock1(): Stock {
    return this.stock1;
  }
}
