import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ProductComponent,
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  public loadedComponents = signal<number>(0);
  public hydratedComponents = signal<number>(0);
  public itemsCounter = signal<number>(0);

  public onComponentLoad(): void {
    this.loadedComponents.update((value) => value + 1);
  }

  public onComponentHydrate(): void {
    this.hydratedComponents.update((value) => value + 1);
  }

  public onItemAdded(quantity: number): void {
    if (this.itemsCounter() > 0) {
      this.itemsCounter.update((value) => value + quantity);
    } else {
      setTimeout(() => {
        this.itemsCounter.update((value) => value + quantity);
      }, 6000);
    }
  }

  public onRecommendedItemAdded(quantity: number): void {
    if (this.itemsCounter() > 0) {
      this.itemsCounter.update((value) => value + quantity);
    } else {
      setTimeout(() => {
        this.itemsCounter.update((value) => value + quantity);
      }, 9000);
    }
  }
}
