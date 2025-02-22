import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Users} from '../shared/users';
import {ProfileService} from '../profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userId: string;
user: Users;
  constructor(private auth: AuthService,
              private ps: ProfileService,
              private router: Router) { }

  ngOnInit() {
    this.userId = this.auth.userData.uid;
    this.ps.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

}
