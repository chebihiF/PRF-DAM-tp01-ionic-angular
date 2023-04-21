import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe!: Recipe;

  constructor(private activateRoute: ActivatedRoute, private recipeService: RecipesService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        // redirection ...
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId!)!;
    })
  }

}
