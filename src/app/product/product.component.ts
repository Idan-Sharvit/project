import { Component, input, output, signal } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, DetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public itemsAdded = output<number>();
  public recommendedItemAdded = output<number>();
  public title = '<Product>';
  public subtitle = '@defer';

  public useBlue = signal<boolean>(false);
  public useOrange = signal<boolean>(false);

  public addItem(quantity: number): void {
    if (this.useBlue()) {
      this.itemsAdded.emit(quantity);
    } else {
      this.useOrange.set(true);
      this.itemsAdded.emit(quantity);
      setTimeout(() => {
        this.useOrange.set(false);
        this.useBlue.set(true);
      }, 3000);
    }
  }

  public addRecommendedItem(quantity: number): void {
    if (this.useBlue()) {
      this.recommendedItemAdded.emit(quantity);
    } else {
      this.useOrange.set(true);
      this.recommendedItemAdded.emit(quantity);
      setTimeout(() => {
        this.useOrange.set(false);
        this.useBlue.set(true);
      }, 3000);
    }
  }
}
