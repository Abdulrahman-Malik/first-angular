import { Routes } from '@angular/router';

import { Blog } from './blog/blog';
import { BlogDetails } from './blog-details/blog-details';
import { NotFoundPage } from './not-found-page/not-found-page';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '**',
    component: NotFoundPage,
  },
];
