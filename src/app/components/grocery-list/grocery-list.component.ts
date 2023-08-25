import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Grocery } from 'src/app/models/grocery';
import { GroceryHeaderComponent } from '../grocery-header/grocery-header.component';
import { GroceryItemComponent } from '../grocery-item/grocery-item.component';
import { GroceryService } from 'src/app/services/grocery.service';
@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GroceryHeaderComponent,
    GroceryItemComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
})
export class GroceryListComponent implements OnInit {
  grocery: Grocery[] = [];
  title = 'Grocery App';
  searchValue = '';
  imagePath =
    'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg';

  constructor(private _grocery: GroceryService) {}
  ngOnInit(): void {
    this.grocery = this._grocery.getGrocery();
  }
  sayHello() {
    console.log('hello');
  }

  deleteGrocery(id: number) {
    this.grocery = this.grocery.filter((g) => g.id !== id);
  }
  getTotal(): number {
    return this.grocery.length;
  }

  quantityChange(id: number, data: number) {
    this.grocery = this.grocery.map((g) =>
      g.id === id
        ? {
            ...g,
            quantity:
              data > 0
                ? g.quantity + data
                : g.quantity > 0
                ? g.quantity + data
                : 0,
          }
        : g
    );
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.grocery.push({
      id: 45,
      name: form.value.name,
      quantity: form.value.quantity,
    });
    form.reset();
  }

  groceryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantity: new FormControl<number | null>(null, Validators.required),
  });

  onSubmit2() {
    this.grocery.push({
      id: 5,
      name: this.groceryForm.value.name!,
      quantity: this.groceryForm.value.quantity!,
    });
  }
}
