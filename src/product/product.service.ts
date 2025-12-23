import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'laptop',
      price: 1000,
    },
    {
      id: 2,
      name: 'mobile',
      price: 2000,
    },
    {
      id: 3,
      name: 'Tv',
      price: 3000,
    },
  ];
  getAllProducts() {
    return this.products;
  }
  getProductById(id: number) {
    return this.products.find((v) => v.id === id);
  }
}
