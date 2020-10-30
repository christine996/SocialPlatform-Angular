import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { Posts } from './../../models/posts.interface';
@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {
  _postsResult: Posts[] = [];
  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllPosts();
  }
  getAllPosts() {
    this.http.get('http://localhost:54039/api/getAllPosts').subscribe((data: Posts[]) => {
      this._postsResult = data;
      console.warn(data);

    });

  }
  deletePost(PostId: any) {
    const url = 'http://localhost:54039/api/deletePost';
    this.http.post(url, {
      Id: PostId
    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }
}
