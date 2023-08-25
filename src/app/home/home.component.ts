import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryListComponent } from '../components/grocery-list/grocery-list.component';
import { NavComponent } from '../components/nav/nav.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GroceryListComponent, NavComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private _router: Router) {}

  loadPosts() {
    // this._router.navigate(['/posts']);
    this._router.navigateByUrl('posts');
  }
}
