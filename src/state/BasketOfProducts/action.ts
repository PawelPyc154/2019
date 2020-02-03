import { BasketOfProductActionTypes, SET_INPUT_CHOISE } from './actionType';
import BasketOfProduct from './BasketOfProduct';

// eslint-disable-next-line import/prefer-default-export
export const setFireBase = (value: BasketOfProduct): BasketOfProductActionTypes => ({
  type: SET_INPUT_CHOISE,
  payload: value,
});
