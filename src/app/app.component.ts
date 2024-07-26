import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rocketseat-challenge-angular';
  productFiltered = ''

  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      const product = params.get('product');
      console.log('Query Parameter:', product);
    });
  }
}
