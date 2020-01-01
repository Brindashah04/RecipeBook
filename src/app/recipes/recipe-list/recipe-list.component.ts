import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','To test','https://upload.wikimedia.org/wikipedia/commons/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg'),
    new Recipe('A Test Recipe','To test','https://upload.wikimedia.org/wikipedia/commons/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
