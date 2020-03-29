// import {IMock, Mock} from 'moq.ts';
// import {ProductService} from '../../src/products/product.service';
// import {ProductControllerFirebase} from '../../src/products/product.controller.firebase';
// import {Products} from '../../src/models/products';
// import {Stock} from '../../src/models/stock';

/* describe('ProductController', () => {
  let productServiceMock: IMock<ProductService>;
  let productController: ProductControllerFirebase;
  let productService: ProductService
  let product: Products = {pName: 'a', pDescript: 'b', id: 'ab'}
  // let newStock: Stock = {product: newProduct, Amount: 5, id: 's'}
  beforeEach(() => {
    productServiceMock = new Mock<ProductService>();
    productServiceMock.setup(ps => ps.writeProduct(product))
      .returns(new Promise((resolve, reject) => {resolve()}));
    //productController = new ProductControllerFirebase(productServiceMock.object());
  });

  it('Creating a new product should create a stock', async () => {
    const create: Promise<FirebaseFirestore.WriteResult> = productService.writeProduct(product)
    expect(create).toHaveBeenCalledTimes(1);
  })

});
*/
