import {Products} from '../models/products';

export interface ProductRepository {

  createProduct(product: Products): Promise<FirebaseFirestore.WriteResult>;
}
