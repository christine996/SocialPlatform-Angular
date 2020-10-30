import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../models/comments.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {LikesCountDialogComponent } from './../../pages/likes-count-dialog/likes-count-dialog.component';
import{Context} from './../../helpers/context';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'comment', 'Actions'];
  dataSource;
  _commentsResult: Comments[] = [];
  _postLikesCount: any;
  constructor(private http: HttpClient,
    private dialog: MatDialog,
    private context:Context) { }

  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments() {
    this.http.get(this.context.actionsUrl.GET_ALL_COMMENTS, {

    }).subscribe((data: Comments[]) => {
      this.dataSource = new MatTableDataSource<Comments>(data);
      this._commentsResult = data;
      console.warn(data);
      // for (var x of this._commentsResult) {
      //   this.getPostLikes(x.PostId);

      // }

    });

  }
  deleteComment(commentId: number) {
    const url = this.context.actionsUrl.DELETE_COMMENT;
    this.http.post(url, {
      Id: commentId
    }).toPromise().then((data: any) => {
      console.log(data);
    });

  }
  getPostLikes(postId) {
    this.http.get(this.context.actionsUrl.GET_POST_LIKES, {
      params: {
        PostId: postId
      }

    }).subscribe((data: any) => {
      this._postLikesCount = data;
      console.warn("1515151", data);

    });

  }
  likesCount(postId) {


    const dialogRef = this.dialog.open(LikesCountDialogComponent, {
      height: '350px',
      width: '200px',
      data: { postId: postId }
    });

  }
}

