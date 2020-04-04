import {Orderline} from '../models/orderline';

export interface OrderRepository {


  createOrder(ol: Orderline, number: number): any;
}
