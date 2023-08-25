import { Injectable } from '@angular/core';
import { Grocery } from '../models/grocery';
@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  grocery: Grocery[] = [
    {
      name: 'Apple',
      quantity: 3,
      id: 1,
    },
    {
      name: 'Oranges',
      quantity: 2,
      id: 2,
    },
    {
      name: 'Cucumber',
      quantity: 4,
      id: 3,
    },
    {
      name: 'Potatos',
      quantity: 4,
      id: 4,
    },
  ];

  constructor() {}

  getGrocery(): Grocery[] {
    return this.grocery;
  }
}
