import { Component } from '@angular/core';
import { AppUser } from '../models/appuser';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  appUser$: AppUser | undefined;
  constructor(public authService: AuthService) {
    this.authService.appUser$.subscribe((appUser) => {
      this.appUser$ = appUser;
      console.log(appUser);
    });
  }
  logout() {
    this.authService.logout();
  }
}
