import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import {PostDetailsComponent} from './pages/post-details/post-details.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { CommentsPageComponent } from './pages/comments-page/comments-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import 'hammerjs';
import { LikesCountDialogComponent } from './likes-count-dialog/likes-count-dialog.component';
import { ValidationRules } from './helpers/validation-rules';
import { UserManagementPageComponent } from './pages/user-management-page/user-management-page.component';
import {Context} from './helpers/context';
@NgModule({
  declarations: [
    AppComponent,

    TimelinePageComponent,
    PostDetailsComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CommentsPageComponent,
    PostsPageComponent,
    LikesCountDialogComponent,
    UserManagementPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTooltipModule
  ],
  providers: [ValidationRules,
    Context],
  bootstrap: [AppComponent]
})
export class AppModule { }
