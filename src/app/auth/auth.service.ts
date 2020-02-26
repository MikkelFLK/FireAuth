import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Users} from '../profile/shared/users';
import {User} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private afs: AngularFirestore
              ) {
    this.afAuth.authState.subscribe(user => {
      if (user) { debugger;
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => { debugger;
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  private SetUserData(user) { debugger;
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const userData: Users = {
    email: user.email
  };
  return userRef.set(userData, {
    merge: true
  });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login/auth']);
    });
  }
}
