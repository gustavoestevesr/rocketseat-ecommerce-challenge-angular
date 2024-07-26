import { Component } from '@angular/core';
import { EnumCategories } from '../../enums/categories.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  categories = [EnumCategories.TODOS_OS_PRODUTOS, EnumCategories.CAMISETAS, EnumCategories.CANECAS]
  orderByOptions = []
  activedCategory = EnumCategories.TODOS_OS_PRODUTOS;

  activateCategory(categorySelected: EnumCategories) {
    this.activedCategory = categorySelected;
  }

  isActive(categorySelected: EnumCategories) {
    return this.activedCategory === categorySelected;
  }
}
