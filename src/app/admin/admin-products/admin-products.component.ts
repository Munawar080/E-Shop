import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  constructor(private router: Router) {
    console.log('admin-products component');
  }

  ngOnInit(): void {}
  navigate() {
    this.router.navigate(['/admin/products/new-product']);
  }
}
