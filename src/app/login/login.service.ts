import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.userData = afAuth.authState;
  }

  /* Login */
  Login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Login Success');
      })
      .catch(err => {
        console.log('Error');
      });
  }
  /*Log Out*/
  LogOut() {
    this.afAuth.auth.signOut();
  }
}
