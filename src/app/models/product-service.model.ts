import { IProduct } from './product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

export interface IProductService {
  create(data: CreateProductDto): IProduct | Promise<IProduct>;
  add?(product: IProduct): IProduct | Promise<IProduct>;
  update(
    id: IProduct['id'],
    changes: UpdateProductDto
  ): IProduct | Promise<IProduct>;
  getAll(): IProduct[] | Promise<IProduct[]>;
  findOne(id: IProduct['id']): IProduct | Promise<IProduct | undefined>;
}
