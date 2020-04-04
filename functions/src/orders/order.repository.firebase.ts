import {OrderRepository} from './order.repository';
import {Orderline} from '../models/orderline';

export class OrderRepositoryFirebase implements OrderRepository{
  createOrder(ol: Orderline, number: number): any {
    return Promise.resolve();
  }

}
