import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProductsComponent, ProductCartComponent],
  imports: [CommonModule, RouterModule],
})
export class ProductsModule {}
