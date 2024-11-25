import { CommonModule } from '@angular/common';
import { Component, inject, input, output, signal } from '@angular/core';
import { ComponentCounterService } from '../component-counter.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public itemAdded = output<number>();
  public title = '<Card>';
  public subtitle = '@defer';
  public img = input.required<string>();
  public componentCounterService = inject(ComponentCounterService);

  public useBlue = signal<boolean>(false);
  public useOrange = signal<boolean>(false);

  public addItem(): void {
    if (this.useBlue()) {
      this.itemAdded.emit(1);
    } else {
      this.useOrange.set(true);
      this.itemAdded.emit(1);
      setTimeout(() => {
        this.useOrange.set(false);
        this.useBlue.set(true);
        this.componentCounterService.incrementLoadedComponents();
        this.componentCounterService.incrementHydratedComponents();
      }, 9000);
    }
  }
}
