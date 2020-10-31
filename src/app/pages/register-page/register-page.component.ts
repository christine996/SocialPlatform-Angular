import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationRules } from './../../helpers/validation-rules';
import { Context } from './../../helpers/context';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  _email: string;
  _password: string;
  _userName: string;
  _mobileNumber; number;
  _registrationForm: FormGroup;
  constructor(private router: Router,
    private validationRules: ValidationRules,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private context: Context) {

    this._registrationForm = this.formBuilder.group(
      {
        _userName: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.USER_NAME)])],
        _email: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.EMAIL)])],
        _password: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.PASSWORD)])],
        _mobileNumber: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.PHONE)])]
      },
    );

  }

  ngOnInit(): void {
  }
  Register() {
    const url = this.context.actionsUrl.REGISTER;
    this.http.post(url, {
      Email: this._email,
      Password: this._password,
      MobileNumber: this._mobileNumber,
      UserName: this._userName
    }).toPromise().then((data: any) => {
      console.log(data);
      this.router.navigate(['TimelinePage']);
    }).catch((error) => {
      console.error(error);
      this.openSnackBar();
    });

  }
  openSnackBar() {
    this._snackBar.open("This email is already taken", "Exit", {
      duration: 3000,
      panelClass: ['blue-snackbar']
    });


    // localStorage.setItem('dataSource', this.dataSource.length);
    // localStorage.getItem('dataSource')
  }
}
