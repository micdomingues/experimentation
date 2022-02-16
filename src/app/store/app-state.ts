import { Product } from "../products/product.model";

export interface AppState {

    product: ReadonlyArray<Product>;

}