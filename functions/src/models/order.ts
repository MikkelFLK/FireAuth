import {Orderline} from './orderline';

export interface Order {
  id?: string;
  date: number;
  orderLines: Orderline[];
}
