import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Grocery } from 'src/app/models/grocery';

@Component({
  selector: 'app-grocery-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css'],
})
export class GroceryItemComponent {
  @Input() gi!: Grocery;
  //@Input() gi2: Grocery | undefined;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.gi.id);
    //this.delete.emit(this.gi2?.id);
  }
}
