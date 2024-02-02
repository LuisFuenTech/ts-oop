import { IProduct } from '../models/product.model';

export interface CreateProductDto extends Omit<IProduct, 'id' | 'category'> {
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
