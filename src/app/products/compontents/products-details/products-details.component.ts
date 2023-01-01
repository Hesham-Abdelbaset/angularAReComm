import { ProductsService } from './../../services/products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../modles/product';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
  providers: [ProductComponent],
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  data: any = {};
  loading: boolean = false;
  @Input() data2!: Product;
  @Output() item = new EventEmitter();
  addbtn: boolean = false;
  amount: number = 1;
  constructor(
    private route: ActivatedRoute,
    private service: ProductsService,
    private productA: ProductComponent
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.loading = true;
    this.service.getProductsById(this.id).subscribe(
      (res: any) => {
        // console.log(res);
        this.data = res;
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        alert('Error');
      }
    );
  }
  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
