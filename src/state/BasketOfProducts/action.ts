import { BasketOfProductActionTypes, SET_INPUT_CHOISE } from './actionType';

// eslint-disable-next-line import/prefer-default-export
export const setFireBase = (value: any): BasketOfProductActionTypes => ({
  type: SET_INPUT_CHOISE,
  payload: value,
});
