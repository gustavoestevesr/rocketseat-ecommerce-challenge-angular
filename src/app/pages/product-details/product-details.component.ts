import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productSelected!: Product | null;

  cartService = inject(CartService)
  productService = inject(ProductsService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId) {
        this.productService.getOne(productId).subscribe((product) => this.productSelected = product);
      }
    });
  }

  addCart(productSelected: Product | null): void {
    if (productSelected) {
      this.cartService.addProduct(productSelected)
    }
  }
}
