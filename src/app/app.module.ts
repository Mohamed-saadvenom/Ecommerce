import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,ProductsModule,
    RouterModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
