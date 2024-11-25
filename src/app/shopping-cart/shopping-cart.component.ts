import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  public title = '<ShoppingCart>';
  public itemsCounter = input.required<number>();
}
