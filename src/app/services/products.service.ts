import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { RESPONSE } from '../fake-db/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private allProducts$ = new BehaviorSubject(RESPONSE.products);

  getProducts(): Observable<Product[]> {
    return this.allProducts$.asObservable();
  }

  getOne(productId: string): Observable<Product | null> {
    return this.allProducts$.pipe(
      map(products => products.find(p => p.id === productId) ?? null)
    );
  }
}
