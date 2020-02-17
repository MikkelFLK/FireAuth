import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Users} from './shared/users';
import {map} from 'rxjs/operators';

const collection_path = 'users';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private db: AngularFirestore) { }


  getUser(id: string): Observable<Users> {
    const userDoc = this.db.doc<Users>(collection_path + '/' + id);
    return userDoc.snapshotChanges()
      .pipe(
        map(changes => {
          const data = changes.payload.data();
          return {id, ...data};
        })
      );
  }
}
