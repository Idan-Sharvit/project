import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'button',
    loadComponent: () =>
      import('./beautiful-button/beautiful-button.component').then(
        (m) => m.BeautifulButtonComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./demo/demo.component').then((m) => m.DemoComponent),
  },
];
