import { Component, OnInit, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  onNewIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients)
  }

}
