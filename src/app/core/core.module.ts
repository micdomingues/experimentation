import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
