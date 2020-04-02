import {Products} from '../models/products';
import {EventContext} from 'firebase-functions';
import {DocumentSnapshot} from 'firebase-functions/lib/providers/firestore';


export interface ProductController {


  createProduct(snap: DocumentSnapshot, context: EventContext): Promise<Products>;
}
