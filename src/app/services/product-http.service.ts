import axios from 'axios';

import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';
import { IProductService } from '../models/product-service.model';
import { IProduct } from '../models/product.model';

export class ProductHttpService implements IProductService {
  static instance: ProductHttpService | null = null;
  private url: string =
    'https://api.escuelajs.co/api/v1/products?limit=25&offset=0';

  constructor(private name: string) {}

  static createInstance(name: string) {
    if (ProductHttpService.instance === null) {
      ProductHttpService.instance = new ProductHttpService(name);
    }

    return ProductHttpService.instance;
  }

  getName() {
    return this.name;
  }

  async create(_data: CreateProductDto): Promise<IProduct> {
    const { data } = await axios.post<IProduct>(this.url, _data);
    return data;
  }

  async update(
    id: IProduct['id'],
    changes: UpdateProductDto
  ): Promise<IProduct> {
    const { data } = await axios.put<IProduct>(`${this.url}/${id}`, changes);
    return data;
  }

  async getAll(): Promise<IProduct[]> {
    const { data } = await axios.get<IProduct[]>(this.url);
    return data;
  }

  async findOne(id: IProduct['id']): Promise<IProduct | undefined> {
    const { data } = await axios.get<IProduct>(`${this.url}/${id}`);
    return data;
  }
}
