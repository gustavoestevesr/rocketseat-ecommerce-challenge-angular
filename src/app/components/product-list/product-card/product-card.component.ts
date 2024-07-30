import { NgOptimizedImage } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() id = '';
  @Input() image = '';
  @Input() title = '';
  @Input() price = 0;
  @Input() isActive = false;
  @Input() onSale = false;

  route = inject(Router)
}
