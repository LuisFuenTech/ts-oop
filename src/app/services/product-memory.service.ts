import { faker } from '@faker-js/faker';

import { IProductService } from '../models/product-service.model';
import { IProduct } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

export class ProductMemoryService implements IProductService {
  private products: IProduct[] = [];

  constructor() {}

  create(data: CreateProductDto): IProduct {
    const newProduct = {
      ...data,
      id: faker.string.uuid(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    return this.add(newProduct);
  }

  add(product: IProduct): IProduct {
    this.products.push(product);

    return product;
  }

  update(id: IProduct['id'], changes: UpdateProductDto): IProduct {
    const { products } = this;
    const index = products.findIndex((item) => item.id === id);
    const previousData = products[index];
    products[index] = {
      ...previousData,
      ...changes,
    };

    return products[index];
  }

  findOne(id: IProduct['id']): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  getAll() {
    return this.products;
  }
}
