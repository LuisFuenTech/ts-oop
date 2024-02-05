import { ProductHttpService } from './services/product-http.service';

const productHttpService = ProductHttpService.createInstance('service_1');

(async () => {
  try {
    const products = await productHttpService.getAll();
    const updatedProduct = await productHttpService.update(products[0].id, {
      title: 'Brand new product',
      description: 'This is a new description',
    });

    console.log(products.length, products[0], updatedProduct);
  } catch (error) {
    console.log(error);
  }
})();
