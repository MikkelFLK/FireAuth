import {TestHelper} from '../helpers/helper';
import {IMock, Times} from 'moq.ts';
import {OrderRepository} from '../../src/orders/order.repository';
import {OrderService} from '../../src/orders/order.service';
import {StockRepository} from '../../src/stock/stock.repository';
import {Order} from '../../src/models/order';


describe('OrderLineService', () => {
  let testHelper = new TestHelper();
  let orderRepository: IMock<OrderRepository>;
  let stockRepository: IMock<StockRepository>;
  let orderService: OrderService;
  beforeEach(()=> {
    orderRepository = testHelper.getOrderRepositoryMock();
    stockRepository = testHelper.getStockRepositoryMock();
    orderService = new OrderService(orderRepository.object(), stockRepository.object());
  });

  it('order service needs a order and a stock repo', () => {
    const orderServiceDefined = new OrderService(orderRepository.object(), stockRepository.object());
    expect(orderServiceDefined).toBe(orderServiceDefined);
  });

  it('order service has a execute function that expects a order', async() => {
    const orderAfter: Order = await orderService.execute(testHelper.getOrder1());
    expect(orderAfter).toBe(testHelper.getOrder1());
  });

  it('when execute lowerStock, lower stock with amount of product bought', async () => {
    const order = testHelper.order1;
    await orderService.execute(order);
    stockRepository.verify(stockRepo => stockRepo.lowerStock(order.orderLines[0].product, order.orderLines[0].amount), Times.Exactly(1))
  })
});
