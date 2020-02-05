import {
  BasketOfProductActionTypes,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_PRODUCT_QUANTITY,
  LOAD_PRODUCTS,
} from './actionType';
import BasketOfProduct from './BasketOfProduct';

// eslint-disable-next-line import/prefer-default-export
export const addProductToBasket = (value: BasketOfProduct): BasketOfProductActionTypes => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: value,
});
export const removeProductFromBasket = (productname: string): BasketOfProductActionTypes => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  payload: productname,
});
export const updateProductQuantity = (
  productname: string,
  productQuantityValue: number,
): BasketOfProductActionTypes => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: { productname, productQuantityValue },
});

export const loadProducts = (products: BasketOfProduct[]): BasketOfProductActionTypes => ({
  type: LOAD_PRODUCTS,
  payload: products,
});
