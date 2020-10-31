import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Platform';


  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
 
  }
  navToAdminPanel(){
    this.router.navigate(['adminPanel']);
  }
  navToRegister(){
    this.router.navigate(['register']);
  }
  navtToLogin(){
    this.router.navigate(['login']);
  }

}

