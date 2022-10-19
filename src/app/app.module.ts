import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { NavbarComponent } from './navbar/navbar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGaurd } from './services/authguard.service';
import { AdminAuthGuard } from './services/admin-guard.service';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ProductCartComponent } from './products/product-cart/product-cart.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    CustomFormsModule,
    CommonModule,
  ],
  providers: [AuthGaurd, AdminAuthGuard],
  bootstrap: [AppComponent],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
