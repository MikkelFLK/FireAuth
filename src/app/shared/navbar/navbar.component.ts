import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

}
