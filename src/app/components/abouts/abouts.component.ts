import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, OnSameUrlNavigation, Params } from '@angular/router';
@Component({
  selector: 'app-abouts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css'],
})
export class AboutsComponent implements OnInit {
  id: number = 0;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
  }
}
