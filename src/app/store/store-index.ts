import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { productReducer } from "../products/state/product.reducer";
import { AppState } from "./app-state";
import { hydrationMetaReducer } from "./hydration.reducer";


export const reducers: ActionReducerMap<AppState> = { 'product': productReducer };

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];