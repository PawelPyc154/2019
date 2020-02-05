import BasketOfProduct from './BasketOfProduct';

export const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
export const REMOVE_PRODUCT_FROM_BASKET = 'REMOVE_PRODUCT_FROM_BASKET';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

export interface addProductToBasket {
  type: typeof ADD_PRODUCT_TO_BASKET;
  payload: BasketOfProduct;
}
export interface removeProductFromBasket {
  type: typeof REMOVE_PRODUCT_FROM_BASKET;
  payload: string;
}
export interface updateProductQuantity {
  type: typeof UPDATE_PRODUCT_QUANTITY;
  payload: { productname: string; productQuantityValue: number };
}
export interface loadProducts {
  type: typeof LOAD_PRODUCTS;
  payload: BasketOfProduct[];
}

export type BasketOfProductActionTypes =
  | addProductToBasket
  | removeProductFromBasket
  | updateProductQuantity
  | loadProducts;
