import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCartRoutingModule } from './product-cart-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCartComponent } from './product-cart.component';

@NgModule({
  imports: [CommonModule, ProductCartRoutingModule],
})
export class ProductCartModule {}
