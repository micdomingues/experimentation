import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { sendApproval } from './state/product.actions';
import { AppState } from '../store/app-state';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss']
})
export class ProductsPage implements OnInit {

  product: Product;

  constructor(private store: Store<AppState>) {
    this.product = this.getInitialProduct();
  }

  ngOnInit(): void {
  }

  sendApproval() {
    this.store.dispatch(sendApproval({ product: this.product }));
    this.product = this.getInitialProduct();
  }

  private getInitialProduct(): Product {
    return { name: '', amount: 0 };
  }

}
