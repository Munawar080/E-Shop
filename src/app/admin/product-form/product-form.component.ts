import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  listChanges,
} from '@angular/fire/compat/database';
import { NgForm } from '@angular/forms';
import { QueryConstraintType } from 'firebase/database';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  categories$: any;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getCategories();
  }

  save(form: NgForm) {
    this.productService.create(form.value);
    form.reset();
  }

  ngOnInit(): void {}
}
