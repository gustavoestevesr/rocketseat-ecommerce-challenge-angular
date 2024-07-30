import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { RESPONSE } from '../fake-db/products';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  allProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  productsCache$: Observable<Product[]> = this.allProducts.asObservable();
  filteredProducts: Product[] = [];

  constructor() {
    this.loadProducts()
  }

  loadProducts() {
    this.allProducts.next(RESPONSE.products);
    this.filteredProducts = RESPONSE.products;
  }

  getAll(): Observable<Product[]> {
    return this.productsCache$;
  }

  getOne(productId: string) {
    return this.allProducts.getValue().find((p) => p.id === productId) || null
  }

  setFilteredList(newProducts: Product[]) {
    this.filteredProducts = newProducts;
  }

  getFilteredList(): Product[] {
    return this.filteredProducts;
  }
}
