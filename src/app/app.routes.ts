import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/main/main-page/component/main-page.component').then(
        (m) => m.MainPage
      ),
  },
  {
    path: 'favoritos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/main/main-page/component/main-page.component').then(
        (m) => m.MainPage
      ),
  },
  {
    path: 'assistidos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/main/main-page/component/main-page.component').then(
        (m) => m.MainPage
      ),
  },
  {
    path: 'dislike',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/main/main-page/component/main-page.component').then(
        (m) => m.MainPage
      ),
  },
];
