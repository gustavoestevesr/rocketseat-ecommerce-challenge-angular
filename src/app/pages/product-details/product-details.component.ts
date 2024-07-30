import { Component, inject, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  productSelected!: Product | null;

  productService = inject(GetProductsService)
  route = inject(ActivatedRoute)
  router = inject(Router)

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('productId');
      if (productId) {
        this.productSelected = this.productService.getOne(productId);
      }
    });
  }

  addCart(): void {

  }
}
