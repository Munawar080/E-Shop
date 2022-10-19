import { Component, Input, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product-list';
import { ShoppingCartService } from 'src/app/services/shoppingcart.service';

@Component({
  selector: 'product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  @Input('product') product!: Products;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: any;
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    console.log(this.product);
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.item[this.product.key!];
    return item ? item.quantity : 0;
  }
}
