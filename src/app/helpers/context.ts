
import { Injectable } from '@angular/core';

@Injectable()
export class Context {

  localUrl = 'http://localhost:54039/';





  actionsUrl = {
    // LOGIN: { url: this.localUrl + 'Token', isAuthenticated: false },
    GET_ALL_COMMENTS:  this.localUrl + 'api/getAllComments' ,
   DELETE_COMMENT:  this.localUrl + 'api/deleteComment' ,
    GET_POST_LIKES:  this.localUrl + 'api/getPostLikes',
   GET_POST_COMMENTS:  this.localUrl + 'api/getPostComments',
    ADD_COMMENT:  this.localUrl + 'api/addComment',
    GET_ALL_POSTS:  this.localUrl + 'api/getAllPosts',

    DELETE_POST:  this.localUrl + 'api/deletePost' ,
    REGISTER:  this.localUrl + 'api/Registeration' ,
    ADD_POST:  this.localUrl + 'api/addPost' ,
   ADD_LIKE:  this.localUrl + 'api/addLikes' ,
    GET_ALL_USERS:  this.localUrl + 'api/getAllUsers' ,
   DEACTIVATE_USER:  this.localUrl + 'api/deactivateUser' ,



  };

  constructor() {
   
  }


}
