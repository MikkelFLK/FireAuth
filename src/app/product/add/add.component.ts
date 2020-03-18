import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Products} from '../shared/products';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  products: Observable<Products[]>;
  productFormGroup: FormGroup;

  constructor(private prodS: ProductService) {
    this.productFormGroup = new FormGroup({
      pName: new FormControl(''),
      pDescript: new FormControl('')
      });
  }

  ngOnInit() {
  }


  createProduct() {
    const prodData = this.productFormGroup.value;
    this.prodS.addProd(prodData);
  }
}
