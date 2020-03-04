import { Component, OnInit } from '@angular/core';
import {Users} from '../shared/users';
import {AuthService} from '../../auth/auth.service';
import {ProfileService} from '../profile.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  user: Users;
  userId: string;
  userFormGroup: FormGroup;


  constructor(private auth: AuthService,
              private ps: ProfileService,
              private router: Router) {
    this.userFormGroup = new FormGroup({
      fName: new FormControl(''),
      lName: new FormControl('')
    });
  }

  ngOnInit() {
    this.userId = this.auth.userData.uid;
    this.ps.getUserById(this.userId).subscribe(user => {
      this.user = user;
    });
  }

  editUser(user) {
    this.ps.updateUser(user);
  }

}
