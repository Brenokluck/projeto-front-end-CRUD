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
      import('./components/favorites/component/favorites-page.component').then(
        (m) => m.FavoritesPageComponent
      ),
  },
  {
    path: 'assistidos',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/watched/component/watched.component').then(
        (m) => m.WatchedComponent
      ),
  },
  {
    path: 'dislike',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/black_list/component/black-list.component').then(
        (m) => m.BlackListComponent
      ),
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/register/component/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
];
