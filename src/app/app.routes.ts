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
        component: RecipesPage
      },
      {
        path: ':recipeId',
        component: RecipeDetailPage
      }
    ]
  }
];
