
import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { About } from './about/about';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
  },

  {
    path: 'blog',
    component: Blog,
  },

  {
    path: 'blog/:slug',
    component: BlogDetails,
  },

  {
    path: 'about',
    component: About,
  },

  {
    path: '**',
    loadComponent: () =>
      import('./not-found-page/not-found-page')
        .then(m => m.NotFoundPage)
  }
];

