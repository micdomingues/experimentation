import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/product.model';

export const sendApproval = createAction('[Product Component] Send Approval', props<{ product: Product }>());

export const retrievedProductsToApproval = createAction(
  '[Product Component] Retrieve Products to Approval',
  props<{ products: ReadonlyArray<Product> }>()
);

export const approveProduct = createAction(
  '[Product Component] Approve Product',
  props<{ name: string }>()
);