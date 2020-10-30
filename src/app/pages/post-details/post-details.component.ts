import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../models/comments.interface';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  _postId: any;
  _postContent: string;
  _postComments: Comments[] = [];
  _postLikesCount: number;
  _comment: string;
  constructor(private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit(): void {
    this._postId = this.route.snapshot.paramMap.get('postId');
    this._postContent = this.route.snapshot.paramMap.get('postContent');

    this.getPostComments();
    this.getPostLikes();
  }

  getPostComments() {
    this.http.get('http://localhost:54039/api/getPostComments', {
      params: {
        PostId: this._postId
      }

    }).subscribe((data: Comments[]) => {
      this._postComments = data;
      console.warn(data);

    });

  }
  getPostLikes() {
    this.http.get('http://localhost:54039/api/getPostLikes', {
      params: {
        PostId: this._postId
      }

    }).subscribe((data: any) => {
      this._postLikesCount = data;
      console.warn(data);

    });

  }
  addComment(comment) {
    const url = 'http://localhost:54039/api/addComment';
    this.http.post(url, {
      PostId: this._postId,
      Comment: comment
    }).toPromise().then((data: any) => {
      console.log(data);
    });

  }

}
