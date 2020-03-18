import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Products} from './shared/products';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import actions from '@angular/fire/schematics/deploy/actions';

const colletion_path = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  addProd(prodData: Products): Observable<Products> {
    return from(
      this.db.collection('products').add(
        {
          pName: prodData.pName,
          pDescript: prodData.pDescript
        }
      )
    ).pipe(
      map(prodRef => {
        prodData.id = prodRef.id;
        return prodData;
      })
    );

  }

  getProds(): Observable<Products[]> {
    return this.db.collection<Products>(colletion_path)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action =>{
            const data = action.payload.doc.data() as Products;
            return {
              pName: data.pName,
              pDescript: data.pDescript
            };
          });
        })
      );
  }
}
