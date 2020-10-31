import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/models/posts.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../models/comments.interface';
import{Context} from './../../helpers/context';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  _commentForm:FormGroup;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private context:Context,
    private formBuilder: FormBuilder) { 
      this._commentForm = this.formBuilder.group(
        {
          _comment: ['', Validators.compose([Validators.required])],
  
        },
      );
    }

  ngOnInit(): void {
    this._postId = this.route.snapshot.paramMap.get('postId');
    this._postContent = this.route.snapshot.paramMap.get('postContent');

    this.getPostComments();
    this.getPostLikes();
  }

  getPostComments() {
    this.http.get(this.context.actionsUrl.GET_POST_COMMENTS, {
      params: {
        PostId: this._postId
      }

    }).subscribe((data: Comments[]) => {
      this._postComments = data;
      console.warn(data);

    });

  }
  getPostLikes() {
    this.http.get(this.context.actionsUrl.GET_POST_LIKES, {
      params: {
        PostId: this._postId
      }

    }).subscribe((data: any) => {
      this._postLikesCount = data;
      console.warn(data);

    });

  }
  addComment(comment) {
    const url = this.context.actionsUrl.ADD_COMMENT;
    this.http.post(url, {
      PostId: this._postId,
      Comment: comment
    }).toPromise().then((data: any) => {
      console.log(data);
    });

  }

}
