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

  constructor() {
    this.allProducts.next(RESPONSE.products);
  }

  getAll(): Observable<Product[]> {
    return this.productsCache$;
  }
}
