import {ProductController} from './product.controller';
import {EventContext} from 'firebase-functions';
import {Products} from '../models/products';
import {ProductService} from './product.service';

export class ProductControllerFirebase implements ProductController {

  constructor(private productService: ProductService) {}

  createProduct(snap: FirebaseFirestore.DocumentSnapshot<FirebaseFirestore.DocumentData>, context: EventContext): Promise<Products> {
    const product = snap.data() as Products;
    product.id = context.params.id;
    return this.productService.createProduct(product);
  }


}

