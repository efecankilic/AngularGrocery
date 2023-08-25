import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IPost } from 'src/app/models/ipost';
import { PostService } from 'src/app/services/post.service';
@Component({
  standalone: true,
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private _http: HttpClient, private _postService: PostService) {}
  ngOnInit(): void {
    // this.getPosts().subscribe((response) => {
    //   this.posts = response;
    // });
    this._postService.getPosts().subscribe((data) => (this.posts = data));
  }

  getPosts() {
    return this._http.get<IPost[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
