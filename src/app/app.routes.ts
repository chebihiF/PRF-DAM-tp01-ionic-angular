import { Routes } from '@angular/router';
import { RecipesPage } from './recipes/recipes.page';
import { RecipeDetailPage } from './recipes/recipe-detail/recipe-detail.page';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: ()=> import('./recipes/recipes.page').then(p => p.RecipesPage)
      },
      {
        path: ':recipeId',
        loadComponent: ()=> import('./recipes/recipe-detail/recipe-detail.page').then(p => p.RecipeDetailPage)
      }
    ]
  }
];
