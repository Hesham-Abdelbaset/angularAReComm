import { ProductComponent } from './compontents/product/product.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './compontents/all-products/all-products.component';
import { ProductsDetailsComponent } from './compontents/products-details/products-details.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, BrowserAnimationsModule],
  exports: [AllProductsComponent, RouterModule, BrowserAnimationsModule],
})
export class ProductsModule {}
