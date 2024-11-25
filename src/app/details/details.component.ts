import { Component, input, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule, CardComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  public itemsAdded = output<number>();
  public recommendedItemsAdded = output<number>();
  public title = '<Details>';
  public subtitle = '@defer';
  public quantity = model<number>(1);

  public useBlue = input<boolean>(false);
  public useOrange = signal<boolean>(false);

  public addItem(): void {
    this.itemsAdded.emit(this.quantity());
  }

  public addRecommendedItem(quantity: number): void {
    this.useOrange.set(true);
    this.recommendedItemsAdded.emit(quantity);
  }
}
