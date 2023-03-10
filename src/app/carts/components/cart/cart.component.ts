import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cartProducts: any[] = [];
  total: number = 0;
  success: boolean = false;
  constructor(private service: CartsService, private toast: ToastrService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getProductsTotal();
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getProductsTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minusAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getProductsTotal();
    }
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  detectChanges() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteProduct(index: number) {
    this.toast.success('Product Deleted');
    this.cartProducts.splice(index, 1);
    this.getProductsTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart() {
    if (this.cartProducts.length >= 1) {
      this.toast.success('The cart is empty');
      this.cartProducts = [];
      this.getProductsTotal();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      this.toast.error('No Products Here');
    }
  }
  getProductsTotal() {
    this.total = 0;
    for (let i in this.cartProducts) {
      this.total +=
        this.cartProducts[i].item.price * this.cartProducts[i].quantity;
    }
  }

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    let model = {
      userId: 5,
      data: new Date(),
      products: products,
    };
    this.service.createNewCart(model).subscribe((res) => {
      this.success = true;
    });
    console.log(model);
  }
}
