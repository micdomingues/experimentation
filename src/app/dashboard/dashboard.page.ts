import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../products/product.model';
import { approveProduct } from '../products/state/product.actions';
import { selectProducts } from '../products/state/product.selectors';
import { AppState } from '../store/app-state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {


  products$ = this.store.select(selectProducts);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  approve(product: Product) {
    this.store.dispatch(approveProduct({ name: product.name }));
  }

}
