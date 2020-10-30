import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from './../../models/comments.interface';
import { MatTableDataSource } from '@angular/material/table';
import {User} from './../../models/users.interface';
import{Context} from './../../helpers/context';
@Component({
  selector: 'app-user-management-page',
  templateUrl: './user-management-page.component.html',
  styleUrls: ['./user-management-page.component.css']
})
export class UserManagementPageComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Email', 'UserName','MobileNumber', 'Actions'];
  dataSource;
  constructor(private http: HttpClient,
    private context:Context) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.http.get(this.context.actionsUrl.GET_ALL_USERS, {

    }).subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource<User>(data);
      console.warn(data);

    });
   
  }
  deactivateUser(userId:number){
    const url = this.context.actionsUrl.DEACTIVATE_USER;
    this.http.post(url, {
      Id: userId
    }).toPromise().then((data: any) => {
      console.log(data);
    });  
  }
}
