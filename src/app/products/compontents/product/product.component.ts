import { Product } from './../../modles/product';
import { CartsService } from './../../../carts/services/carts.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() data!: Product;
  @Output() item = new EventEmitter();
  addbtn: boolean = false;
  amount: number = 1;
  constructor() {}

  ngOnInit(): void {}
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
