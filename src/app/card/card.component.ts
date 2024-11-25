import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';

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

  public useBlue = input<boolean>(false);
  public useOrange = signal<boolean>(false);

  public addItem(): void {
    this.useOrange.set(true);
    this.itemAdded.emit(1);
  }
}
