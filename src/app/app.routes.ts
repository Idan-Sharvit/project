import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./beautiful-button/beautiful-button.component').then(
        (m) => m.BeautifulButtonComponent
      ),
  },
  {
    path: 'demo',
    loadComponent: () =>
      import('./demo/demo.component').then((m) => m.DemoComponent),
  },
];
