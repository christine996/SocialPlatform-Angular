import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-likes-count-dialog',
  templateUrl: './likes-count-dialog.component.html',
  styleUrls: ['./likes-count-dialog.component.css']
})
export class LikesCountDialogComponent implements OnInit {
  _likesCount: number;
  _postId: any;
  constructor(private dialogRef: MatDialogRef<LikesCountDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpClient) {
    this._postId = this.data.postId;
  }

  ngOnInit(): void {
    this.getPostLikes();
  }
  getPostLikes() {
    this.http.get('http://localhost:54039/api/getPostLikes', {
      params: {
        PostId: this._postId
      }

    }).subscribe((data: any) => {
      this._likesCount = data;
      console.warn('1515151', data);

    });

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
