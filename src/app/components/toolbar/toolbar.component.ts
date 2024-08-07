import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  searchbarInput = ''

  router = inject(Router);
  route = inject(ActivatedRoute);
  cartService = inject(CartService)

  searchProduct() {
    if (this.searchbarInput.length > 0) {
      this.updateQueryParams(this.searchbarInput);
    } else {
      this.resetQueryParams()
    }
  }

  goToProductDetails(productId: string) {
    this.router.navigate(['/productDetails', productId]);
  }

  updateQueryParams(productId: string) {
    // Para adicionar ou atualizar um único parâmetro
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { product: productId },
      queryParamsHandling: 'merge'
    });
  }

  resetQueryParams() {
    // Para redefinir todos os parâmetros de consulta
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      queryParamsHandling: ''
    });
  }

  getQtdProducts() {
    return this.cartService.getQtdProducts();
  }
}
