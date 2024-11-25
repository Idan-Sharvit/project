import { Component, model } from '@angular/core';
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
  public title = '<Details>';
  public subtitle = '@defer';
  public quantity = model<number>(1);
}
