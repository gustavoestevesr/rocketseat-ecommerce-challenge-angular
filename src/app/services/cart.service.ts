import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsCart: Product[] = [];

  constructor() { }

  getProducts(): Product[] {
    return this.productsCart;
  }

  getQtdProducts(): number {
    return this.productsCart.length;
  }

  addProduct(product: Product) {
    this.productsCart.push(product);
  }

  removeProduct(product: Product) {
    const productFound = this.productsCart.findIndex((p) => p.id === product.id)
    if (productFound !== -1) {
      this.productsCart.slice(productFound, 1);
    }
  }
}
