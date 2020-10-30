import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {CommentsPageComponent} from './pages/comments-page/comments-page.component';
import {PostsPageComponent} from './pages/posts-page/posts-page.component';
import {UserManagementPageComponent} from './pages/user-management-page/user-management-page.component';
  // import { from } from 'rxjs';
const routes: Routes = [
  { path: '', redirectTo: '/TimelinePage', pathMatch: 'full' },
  // /////////////////////////////////////////////////////////////////////////
  { path: 'TimelinePage', component: TimelinePageComponent },
  { path: 'PostDetails', component: PostDetailsComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'commentsPage', component: CommentsPageComponent },
  { path: 'postsPage', component: PostsPageComponent },
  { path: 'userManagementPage', component: UserManagementPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
