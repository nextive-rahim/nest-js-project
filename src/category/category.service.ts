import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getCategory() {
    return ['laprop', 'mobile', 'tv'];
  }
}
