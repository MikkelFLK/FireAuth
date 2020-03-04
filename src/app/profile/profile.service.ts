import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {from, Observable, pipe} from 'rxjs';
import {Users} from './shared/users';
import {map, switchMap} from 'rxjs/operators';
import Item = firebase.analytics.Item;
import {User} from 'firebase';

const collection_path = 'users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: Users;

  constructor(private db: AngularFirestore) { }


  getUserById(id: string): Observable<Users> {
    const userDoc = this.db.doc<Users>(collection_path + '/' + id);
    return userDoc.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          return {id, ...data};
        })
      );
  }

  updateUser(user) {
    const userDoc = this.db.doc<Users>(collection_path + '/' + user.id);
    userDoc.update(user);
  }
}
