import { Routes } from '@angular/router';
import { RecipesPage } from './recipes/recipes.page';

export const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: 'recipe-detail',
    loadComponent: () => import('./recipes/recipe-detail/recipe-detail.page').then( m => m.RecipeDetailPage)
  },
];
