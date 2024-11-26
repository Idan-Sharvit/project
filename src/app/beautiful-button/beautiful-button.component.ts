import { Component, signal } from '@angular/core';

@Component({
  selector: 'beautiful-button',
  standalone: true,
  imports: [],
  templateUrl: './beautiful-button.component.html',
  styleUrl: './beautiful-button.component.scss',
  // host: { ngSkipHydration: 'true' },
})
export class BeautifulButtonComponent {
  protected totalCount = signal(0);

  protected increment(): void {
    this.totalCount.update((val) => val + 1);
  }
}
