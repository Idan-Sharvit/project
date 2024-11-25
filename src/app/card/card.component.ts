import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public itemAdded = output<number>();
  public title = '<Card>';
  public subtitle = '@defer';
  public img = input.required<string>();

  public addItem(): void {
    this.itemAdded.emit(1);
  }
}
