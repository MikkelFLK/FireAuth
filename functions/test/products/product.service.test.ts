import {IMock, Times} from 'moq.ts';
import {ProductService} from '../../src/products/product.service';
import {TestHelper} from '../helpers/helper';
import {ProductRepository} from '../../src/products/product.repository';
import {StockRepository} from '../../src/stock/stock.repository';
import {Products} from '../../src/models/products';

describe('ProductService', ()=> {
  let testHelper = new TestHelper();
  let productRepository: IMock<ProductRepository>;
  let stockRepository: IMock<StockRepository>;
  let productService: ProductService;
  beforeEach(() => {
    productRepository = testHelper.getProductRepositopryMock();
    stockRepository = testHelper.getStockRepositoryMock();
    productService = new ProductService(productRepository.object(), stockRepository.object());
  });

  it('Product Service needs a Stock repo nad a Product repo', () => {
    const productServiceDefined = new ProductService(productRepository.object(), stockRepository.object());
    expect(productServiceDefined).toBe(productServiceDefined);
  });

  it('Product Service has a Create Function that expects a product that returns a Promise containing the product', async () => {
    const productAfter: Products = await productService.createProduct(testHelper.getProduct1());
    expect(productAfter).toBe(testHelper.getProduct1());
  });

  it('When new product is created, create a stock of 5 with new product', async () => {
    await productService.createProduct(testHelper.product1);
    stockRepository.verify(stockRepo => stockRepo.createStock(testHelper.product1, 5), Times.Exactly(1));
  });
});

