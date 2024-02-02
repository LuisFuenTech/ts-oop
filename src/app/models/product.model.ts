import { IBaseModel } from './base.model';
import { ICategory } from './category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';

export interface IProduct extends IBaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  color: string;
  price: number;
  category: ICategory;
  isNew: boolean;
  tags: string[];
  size?: Sizes;
}
