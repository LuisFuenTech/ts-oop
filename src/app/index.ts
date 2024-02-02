import { faker } from '@faker-js/faker';
import { ProductMemoryService } from './services/product-memory.service';
import { ProductHttpService } from './services/product-http.service';

const productService = new ProductMemoryService();
const productHttpService = new ProductHttpService();

productService.create({
  title: faker.commerce.productName(),
  image: faker.image.url(),
  description: faker.commerce.productDescription(),
  stock: faker.number.int({ min: 10, max: 100 }),
  color: faker.color.human(),
  price: Number(faker.commerce.price({ min: 1000 })),
  isNew: faker.datatype.boolean(),
  tags: [faker.lorem.word(), faker.lorem.word()],
  categoryId: faker.string.uuid(),
});

(async () => {
  try {
    const products = await productHttpService.getAll();
    const updatedProduct = await productService.update(products[0].id, {
      title: 'Brand new product',
      description: 'This is a new description',
    });

    console.log(products[0], updatedProduct);
  } catch (error) {
    console.log(error);
  }
})();
