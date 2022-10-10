import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, Subscription } from 'rxjs';
import { ProductList, Products } from 'src/app/models/product-list';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products!: Products[];
  filteredProducts!: any[];
  subscription!: Subscription;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.subscription = this.productService
      .getAll()
      .pipe(
        map((changes) => {
          return changes.map((c) => ({
            key: c.key,
            payload: c.payload.val() as ProductList,
          }));
        })
      )
      .subscribe((products) => {
        this.filteredProducts = this.products = products;
        this.dtTrigger.next('');
      });
  }
  navigate() {
    this.router.navigate(['/admin/products/new-product']);
  }
  filter(query: string) {
    this.filteredProducts = query
      ? this.products.filter((product) =>
          product.payload.title.toLowerCase().includes(query.toLowerCase())
        )
      : this.products;
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
