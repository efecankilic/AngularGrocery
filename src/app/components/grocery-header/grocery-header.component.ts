import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grocery-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery-header.component.html',
  styleUrls: ['./grocery-header.component.css'],
})
export class GroceryHeaderComponent {
  @Input('total') tt: number = 0;
  title = 'Grocery App';
}
