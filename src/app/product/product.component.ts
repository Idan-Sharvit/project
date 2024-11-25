import { Component, output } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public itemsAdded = output<number>();
  public title = '<Product>';
  public subtitle = '@defer';

  public addItem(quantity: number): void {
    this.itemsAdded.emit(quantity);
  }
}
