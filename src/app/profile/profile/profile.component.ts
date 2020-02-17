import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';
import {ProfileService} from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;

  constructor(public auth: LoginService,
              private userServ: ProfileService) { }

  ngOnInit() {

  }

}
