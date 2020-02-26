import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Users} from '../shared/users';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../profile.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {
  users: Observable<Users[]>;
  userFormGroup: FormGroup;
  password: string;

  constructor(private ps: ProfileService,
              private authService: AuthService) {
    this.userFormGroup = new FormGroup( {
      fName: new FormControl(''),
      lName: new FormControl(''),
      email: new FormControl(''),
      userPassword: new FormControl(''),
      userPasswordC: new FormControl('')
    });
  }

  ngOnInit() {
  }

  addUser(email, password) {
    const userData = this.userFormGroup.value;
    this.authService.SignUp(email, password);
  }

}
