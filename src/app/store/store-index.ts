import { ActionReducerMap } from "@ngrx/store";
import { productReducer } from "../products/state/product.reducer";
import { AppState } from "./app-state";

export const reducers: ActionReducerMap<AppState> = { 'product': productReducer };

/**
 * StoreKeys to rehydrate
 */
export const storeKeys: string[] = ['product'];