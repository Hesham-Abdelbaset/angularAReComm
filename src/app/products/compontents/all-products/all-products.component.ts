import { Product } from './../../modles/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Product[] = [];
  categoires: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];
  constructor(private service: ProductsService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    // $(document).ready(function () {
    //   alert('I am Called From jQuery');
    // });
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        this.loading = false;
        console.log(res);
      },
      (err) => {
        this.loading = false;
        console.log(err.message);
      }
    );
  }
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.loading = false;
        this.categoires = res;
        console.log(res);
      },
      (err) => {
        this.loading = false;
        console.log(err.message);
      }
    );
  }
  filterCategory(event: any) {
    let val = event.target.value;
    if (val == 'all') {
      this.getProducts();
    } else {
      this.getProductsByCategory(val);
    }
  }
  getProductsByCategory(keyword: string) {
    this.loading = true;
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.loading = false;
      this.products = res;
    });
  }
  addToCard(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exists = this.cartProducts.find(
        (item) => item.item.id == event.item.id
      );
      if (exists) {
        this.toast.error('This product alreday in the cart!');
      } else {
        this.toast.success('Done, Your Product in the cart');
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
