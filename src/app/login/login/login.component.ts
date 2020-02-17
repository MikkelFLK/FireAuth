import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {LoginService} from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private loginService: LoginService) { }

  email: string;
  password: string;

  login() {
    this.loginService.Login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

}
