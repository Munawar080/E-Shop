import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductList, Products } from '../models/product-list';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { ShoppingCartService } from '../services/shoppingcart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnDestroy, OnInit {
  products$: Products[] = [];
  categories$: any;
  filteredCategories$: Products[] = [];
  category: string = '';
  constructor(
    private productService: ProductService,
    private categoriesServices: CategoryService,
    private route: ActivatedRoute,
    private cartService: ShoppingCartService
  ) {
    this.categoriesServices.getAll().subscribe((categories) => {
      console.log(categories);
      this.categories$ = categories;
    });
  }
  ngOnInit(): void {
    let products = this.productService.getAll().pipe(
      map((changes) => {
        return changes.map((c) => {
          return {
            key: c.key,
            payload: c.payload.val() as ProductList,
          };
        });
      })
    );

    products
      .pipe(
        switchMap((products) => {
          console.log(products);
          this.products$ = this.filteredCategories$ = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe((param) => {
        this.category = param.get('category') as string;
        this.filteredCategories$ = this.category
          ? this.products$.filter(
              (p) => p.payload.category == this.category.toLowerCase()
            )
          : this.products$;
      });
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
  }
  ngOnDestroy(): void {}
}
