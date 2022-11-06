import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, pipe } from 'rxjs';
import { AppUser } from '../models/appuser';
import { AuthService } from '../services/auth.service';
import { ShoppingCartService } from '../services/shoppingcart.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appUser$: AppUser | undefined;
  constructor(
    public authService: AuthService,
    private route: Router,
    private cartService: ShoppingCartService
  ) {}
  async ngOnInit(): Promise<void> {
    this.authService.appUser$.subscribe((appUser) => {
      this.appUser$ = appUser;
      console.log(appUser);
    });

    // shopping cart service

    let cart$ = await this.cartService
      .getCart()
      .then((res) => res.snapshotChanges());

    cart$.subscribe((cart) => {
      console.log(cart.payload.val());
    });

    // shoppingcarts
    console.log('hello world');
  }
  logout() {
    this.authService.logout();
  }
}
