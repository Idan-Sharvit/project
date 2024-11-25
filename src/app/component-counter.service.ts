import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentCounterService {
  public loadedComponents = signal<number>(5);
  public hydratedComponents = signal<number>(4);

  public incrementLoadedComponents(): void {
    this.loadedComponents.update((value) => value + 1);
  }

  public incrementHydratedComponents(): void {
    this.hydratedComponents.update((value) => value + 1);
  }
}
