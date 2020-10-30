import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../models/comments.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import {LikesCountDialogComponent } from './../../pages/likes-count-dialog/likes-count-dialog.component';
@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'comment', 'likes', 'Actions'];
  dataSource;
  _commentsResult: Comments[] = [];
  _postLikesCount: any;
  constructor(private http: HttpClient,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllComments();
  }
  getAllComments() {
    this.http.get('http://localhost:54039/api/getAllComments', {

    }).subscribe((data: Comments[]) => {
      this.dataSource = new MatTableDataSource<Comments>(data);
      this._commentsResult = data;
      console.warn(data);
      for (var x of this._commentsResult) {
        this.getPostLikes(x.PostId);
        console.log("qqqqqq", x.PostId);
      }

    });

  }
  deleteComment(commentId: number) {
    const url = 'http://localhost:54039/api/deleteComment';
    this.http.post(url, {
      Id: commentId
    }).toPromise().then((data: any) => {
      console.log(data);
    });

  }
  getPostLikes(postId) {
    this.http.get('http://localhost:54039/api/getPostLikes', {
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

