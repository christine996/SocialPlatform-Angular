import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationRules } from './../../helpers/validation-rules';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  _loginForm: FormGroup;
  constructor(private validationRules: ValidationRules,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router) {
    this._loginForm = this.formBuilder.group(
      {
       _email: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.EMAIL)])],
        _password: ['', Validators.compose([Validators.required, Validators.pattern(this.validationRules.Expression.PASSWORD)])],
      },
    );
  }

  ngOnInit(): void {
  }

  navToTimeline() {
    this.router.navigate(['TimelinePage']);
  }
}
