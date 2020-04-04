import {OrderRepository} from './order.repository';
import {StockRepository} from '../stock/stock.repository';
import {Order} from '../models/order';

export class OrderService {

  constructor(private orderRepository: OrderRepository, private stockRepository: StockRepository) {
    console.log(this.orderRepository);
    console.log(this.stockRepository);
  }

  async execute(order: Order): Promise<Order> {
    await this.stockRepository.lowerStock(order.orderLines[0].product, order.orderLines[0].amount);
    return Promise.resolve(order);
  }
}
