import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'GRILLED BASIL CHICKEN',
      imageUrl: 'https://www.afamilyfeast.com/wp-content/uploads/2013/07/Grilled-Basil-Garlic-Chicken-2.jpg',
      ingredients: ['¾ cup balsamic vinegar',' ¼cup tightly packed fresh basil leaves','2 tbsp olive oil', '1 garlic clove, minced']
    },
    {
      id: 'r2',
      title: 'CANTALOUPE GAZPACHO',
      imageUrl: 'https://lepetiteats.com/wp-content/uploads/2018/08/IMG_0429.jpg',
      ingredients: ['1 medium cantaloupe',' 1 small cucumber','2 tbsp chopped red onion,', '2 tsps kosher salt']
    },
    {
      id: 'r3',
      title: 'GREEN BEANS WITH BACON AND NEW POTATOES',
      imageUrl: 'https://www.sandraseasycooking.com/wp-content/uploads/2016/11/Southern-Green-beans-and-New-Potatoes-with-Bacon-Recipe-1-720x540.jpg',
      ingredients: ['4 slices bacon','1 medium onion','2 lbs fresh green beans','8 small new potatoes,', '1/8 tsp salt']
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
