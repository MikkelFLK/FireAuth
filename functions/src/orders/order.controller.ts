import {Order} from '../models/order';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';
import {EventContext} from 'firebase-functions';

export interface OrderController {

  execute(snap: DocumentSnapshot, context: EventContext): Promise<Order>;
}
