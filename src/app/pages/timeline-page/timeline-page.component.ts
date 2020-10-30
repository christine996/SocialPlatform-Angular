import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import{Context} from './../../helpers/context';
import { Posts } from './../../models/posts.interface';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-timeline-page',
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css']
})
export class TimelinePageComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _postsResult: Posts[] = [];
  _post: any;
  _postId: number;
  _comment: string;
  constructor(private http: HttpClient,
    private router: Router,
    private context:Context) { }

  ngOnInit(): void {
    this.getAllPosts();

  }
  getAllPosts() {
    this.http.get(this.context.actionsUrl.GET_ALL_POSTS).subscribe((data: Posts[]) => {
      this._postsResult = data;
      this._postsResult.sort((a, b) => 0 - (a > b ? 1 : -1));
      console.warn(data);

    });

  }
  AddPost() {

    const url = this.context.actionsUrl.ADD_POST;
    this.http.post(url, {
      Post: this._post
    }).toPromise().then((data: any) => {
      console.log(data);
    });
    this.getAllPosts();
  }
  postDetails(post: Posts) {
    this.router.navigate(['PostDetails', { postId: post.Id, postContent: post.Post }]);
  }
  addComment(postId) {
    this.router.navigate(['PostDetails']);
  }
  addLike(postId: number) {
    const url = this.context.actionsUrl.ADD_LIKE;
    this.http.post(url, {
      PostId: postId
    }).toPromise().then((data: any) => {
      console.log(data);
    });
  }

  sortPosts() {
    this._postsResult.sort((a, b) => 0 - (a > b ? -1 : 1));
  }

}
