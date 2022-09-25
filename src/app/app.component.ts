import { Component } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {
    this.authService.user$.subscribe((user) => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl as UrlTree | string);
      }
    });
  }
}
