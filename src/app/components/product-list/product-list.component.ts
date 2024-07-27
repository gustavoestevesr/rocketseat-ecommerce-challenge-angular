import { Component } from '@angular/core';
import { EnumCategories } from '../../enums/categories.enum';
import { CommonModule } from '@angular/common';
import { EnumOrderByOptions } from '../../enums/orderByOptions.enum';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  categories = [EnumCategories.TODOS_OS_PRODUTOS, EnumCategories.CAMISETAS, EnumCategories.CANECAS]
  orderByOptions = [EnumOrderByOptions.NOVIDADES, EnumOrderByOptions.PRECO_MAIOR_MENOR, EnumOrderByOptions.PRECO_MENOR_MAIOR, EnumOrderByOptions.MAIS_VENDIDOS]
  activedCategory = EnumCategories.TODOS_OS_PRODUTOS;
  orderBySelected = null;

  changeCategory(categorySelected: EnumCategories) {
    this.activedCategory = categorySelected;
  }

  isActive(categorySelected: EnumCategories) {
    return this.activedCategory === categorySelected;
  }

  changeOrderBy() {
    console.log('Order by selected:', this.orderBySelected);
  }


}
