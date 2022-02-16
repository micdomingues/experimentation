import { createReducer, on } from '@ngrx/store';
import { Product } from '../product.model';
import { approveProduct, retrievedProductsToApproval, sendApproval } from './product.actions';

// export const initialState: Product = { amount: 0, name: '' };
export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
    initialState,
    // on(sendApproval, (_state, { product }) => product),
    on(retrievedProductsToApproval, (_state, { products }) => products),
    on(approveProduct, (state, { name }) => state.filter(product => product.name !== name)),
    on(sendApproval, (state, { product }) => {
        return [...state, product];
    })
);
