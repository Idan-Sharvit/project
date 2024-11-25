import { Component, inject, model, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { ComponentCounterService } from '../component-counter.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  public itemsAdded = output<number>();
  public recommendedItemsAdded = output<number>();
  public title = '<Details>';
  public subtitle = '@defer';
  public quantity = model<number>(1);
  public useBlue = signal<boolean>(false);
  public useOrange = signal<boolean>(false);
  public componentCounterService = inject(ComponentCounterService);

  public addItem(): void {
    if (this.useBlue()) {
      this.itemsAdded.emit(this.quantity());
    } else {
      this.useOrange.set(true);
      this.itemsAdded.emit(this.quantity());

      setTimeout(() => {
        this.useOrange.set(false);
        this.useBlue.set(true);
        this.componentCounterService.incrementLoadedComponents();
        this.componentCounterService.incrementHydratedComponents();
      }, 6000);
    }
  }

  public addRecommendedItem(quantity: number): void {
    if (this.useBlue()) {
      this.recommendedItemsAdded.emit(quantity);
    } else {
      this.useOrange.set(true);
      this.recommendedItemsAdded.emit(quantity);

      setTimeout(() => {
        this.useOrange.set(false);
        this.useBlue.set(true);
        this.componentCounterService.incrementLoadedComponents();
        this.componentCounterService.incrementHydratedComponents();
      }, 6000);
    }
  }
}
