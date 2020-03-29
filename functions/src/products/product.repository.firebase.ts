import {Products} from '../models/products';
import {ProductRepository} from './product.repository';
import * as admin from 'firebase-admin';

export class ProductRepositoryFirebase implements ProductRepository{
  productPath = 'products';
  stockPath = 'stock';


  db(): FirebaseFirestore.Firestore {
    return admin.firestore();
  }

  createProduct(product: Products): Promise<FirebaseFirestore.WriteResult> {
    return this.db().doc(`${this.productPath}`).create(product);
  };


}
