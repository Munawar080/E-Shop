import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../models/appuser';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  appUser$: AppUser | undefined;
  constructor(public authService: AuthService, private route: Router) {
    this.authService.appUser$.subscribe((appUser) => {
      this.appUser$ = appUser;
      console.log(appUser);
    });
  }
  logout() {
    this.authService.logout();
  }
}
