import {ProductRepository} from './product.repository';
import {Products} from '../models/products';


export class ProductService {

  constructor(private productRepository: ProductRepository) {
  }

  // writeProduct(id: string, pName: string, pDescript: string): Promise<FirebaseFirestore.WriteResult> {
  //   return this.productRepository.createProduct({id, pName, pDescript})
  // }
  writeProduct(product: Products) {
        return this.productRepository.createProduct(product)
  }
}
