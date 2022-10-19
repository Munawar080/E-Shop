import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminAuthGuard } from './services/admin-guard.service';
import { AuthGaurd } from './services/authguard.service';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    // loadChildren: () =>
    //   import('./products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  //  authguard
  {
    path: 'shoping-card',
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import('./shoping-card/shoping-card.module').then(
        (m) => m.ShopingCardModule
      ),
  },
  {
    path: 'check-out',
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import('./check-out/check-out.module').then((m) => m.CheckOutModule),
  },
  {
    path: 'order-success',
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import('./order-success/order-success.module').then(
        (m) => m.OrderSuccessModule
      ),
  },
  {
    path: 'my-orders',
    canActivate: [AuthGaurd],
    loadChildren: () =>
      import('./my-orders/my-orders.module').then((m) => m.MyOrdersModule),
  },
  {
    path: 'admin/orders',
    loadChildren: () =>
      import('./admin/admin-orders/admin-orders.module').then(
        (m) => m.AdminOrdersModule
      ),
    canActivate: [AuthGaurd, AdminAuthGuard],
  },

  {
    path: 'admin/products/new-product',
    loadChildren: () =>
      import('./admin/product-form/product-form.module').then(
        (m) => m.ProductFormModule
      ),
    canActivate: [AuthGaurd, AdminAuthGuard],
  },
  {
    path: 'admin/products/new-product/:id',
    loadChildren: () =>
      import('./admin/product-form/product-form.module').then(
        (m) => m.ProductFormModule
      ),
    canActivate: [AuthGaurd, AdminAuthGuard],
  },
  {
    path: 'admin/products',
    loadChildren: () =>
      import('./admin/admin-products/admin-products.module').then(
        (m) => m.AdminProductsModule
      ),
    canActivate: [AuthGaurd, AdminAuthGuard],
  },
  // product-cart module

  {
    path: '**',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
