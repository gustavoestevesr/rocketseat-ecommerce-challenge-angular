import { Injectable } from '@angular/core';
import { EnumCategories } from '../enums/categories.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFilterService {

  constructor() { }

  filterByCategory(products: Product[], category: EnumCategories): Product[] {
    if (category === EnumCategories.TODOS_OS_PRODUTOS) {
      return products;
    }
    return products.filter(product => product.category === category);
  }

  sortBy(products: Product[], property: keyof Product, order: 'asc' | 'desc' = 'asc'): Product[] {
    return products.sort((a, b) => {
      if (a[property] < b[property]) {
        return order === 'asc' ? -1 : 1;
      } else if (a[property] > b[property]) {
        return order === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
