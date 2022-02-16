import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsPage } from './products.page';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsPage
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
  ]
})
export class ProductsModule { }
