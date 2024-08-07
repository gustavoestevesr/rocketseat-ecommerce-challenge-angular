import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { ProductFilterService } from '../../services/filter-products.service';
import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { EnumCategories } from '../../enums/categories.enum';
import { EnumOrderByOptions } from '../../enums/orderByOptions.enum';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent,
    ProductCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];

  activeCategory = EnumCategories.TODOS_OS_PRODUTOS;
  categories = [
    EnumCategories.TODOS_OS_PRODUTOS,
    EnumCategories.CAMISETA,
    EnumCategories.CANECA,
  ];

  orderByFormControl = new FormControl(null);
  sortOrder: 'asc' | 'desc' = 'asc';
  orderByOptions = [
    EnumOrderByOptions.NOVIDADES,
    EnumOrderByOptions.PRECO_MAIOR_MENOR,
    EnumOrderByOptions.PRECO_MENOR_MAIOR,
    EnumOrderByOptions.MAIS_VENDIDOS,
  ];
  sortProperty: keyof Product = 'title';

  productService = inject(ProductsService);
  productFilterService = inject(ProductFilterService);

  ngOnInit(): void {
    this.loadProducts();
    this.onValueChangeOrderBy$();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  onValueChangeOrderBy$() {
    this.orderByFormControl.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(100),
        startWith(EnumOrderByOptions.NOVIDADES)
      )
      .subscribe((type) => {
        this.adjustParmsOrderByToApplyFilter(type || EnumOrderByOptions.NOVIDADES);
        this.applyFilters();
      });
  }

  adjustParmsOrderByToApplyFilter(
    type: EnumOrderByOptions
  ) {
    switch (type) {
      case EnumOrderByOptions.MAIS_VENDIDOS:
        this.sortProperty = 'qtdSold';
        this.sortOrder = 'desc';
        return;
      case EnumOrderByOptions.NOVIDADES:
        this.sortProperty = 'createAt';
        this.sortOrder = 'desc';
        return;
      case EnumOrderByOptions.PRECO_MAIOR_MENOR:
        this.sortProperty = 'price';
        this.sortOrder = 'desc';
        return;
      case EnumOrderByOptions.PRECO_MENOR_MAIOR:
        this.sortProperty = 'price';
        this.sortOrder = 'asc';
        return;
    }
  }

  applyFilters(): void {
    let result = this.products;
    if (this.activeCategory) {
      result = this.productFilterService.filterByCategory(
        result,
        this.activeCategory
      );
    }
    result = this.productFilterService.sortBy(
      result,
      this.sortProperty,
      this.sortOrder
    );
    this.filteredProducts = result;
  }

  onCategoryChange(category: EnumCategories): void {
    this.activeCategory = category;
    this.applyFilters();
  }

  isActive(categorySelected: EnumCategories) {
    return this.activeCategory === categorySelected;
  }
}
