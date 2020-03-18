import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Products} from '../shared/products';
import {ProductService} from '../product.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  prods: Observable<Products[]>;

  constructor(private prodS: ProductService) { }

  ngOnInit() {
    this.prods = this.prodS.getProds();
  }

}
