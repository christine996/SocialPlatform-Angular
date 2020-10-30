import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
  }

  navToTimeline(){
    this.router.navigate(['TimelinePage']);
  }
}
