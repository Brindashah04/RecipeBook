import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'To test',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg',
        [
            new Ingredient('Mint', 1),
            new Ingredient('Cilantro', 1)
        ]),
        new Recipe('A Test Recipe',
        'To test',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Panipuri%2C_Golgappa%2C_Phuchka.jpg',
        [
            new Ingredient('Puri', 1),
            new Ingredient('Potato', 1)
        ])
      ];

    constructor(private slService: ShoppingListService){}
    getRecipes() {
        return this.recipes.slice();
    }  

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}