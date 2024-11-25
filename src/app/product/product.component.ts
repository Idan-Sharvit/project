import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  public title = '<Product>';
  public subtitle = '@defer';
}
