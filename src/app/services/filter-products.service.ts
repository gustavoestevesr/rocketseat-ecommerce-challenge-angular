import { Injectable } from '@angular/core';
import { EnumCategories } from '../enums/categories.enum';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FilterProductsService {

  constructor() { }

  filterProducts(productsList: Product[], category: EnumCategories): Product[] {
    return productsList;
  }
}
