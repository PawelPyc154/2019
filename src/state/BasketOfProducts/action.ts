import {
  BasketOfProductActionTypes,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_PRODUCT_QUANTITY,
} from './actionType';
import BasketOfProduct from './BasketOfProduct';

// eslint-disable-next-line import/prefer-default-export
export const addProductToBasket = (value: BasketOfProduct): BasketOfProductActionTypes => ({
  type: ADD_PRODUCT_TO_BASKET,
  payload: value,
});
export const removeProductFromBasket = (Productname: string): BasketOfProductActionTypes => ({
  type: REMOVE_PRODUCT_FROM_BASKET,
  payload: Productname,
});
export const updateProductQuantity = (
  Productname: string,
  ProductQuantityValue: number,
): BasketOfProductActionTypes => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: { Productname, ProductQuantityValue },
});
