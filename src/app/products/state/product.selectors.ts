import { createFeatureSelector } from "@ngrx/store";
import { Product } from "../product.model";

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('product');