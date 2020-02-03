import { BasketOfProductActionTypes } from './actionType';

import BasketOfProduct from './BasketOfProduct';

const initialState: BasketOfProduct[] = [
  {
    name: 'eee',
    cost: '25',
    quantity: 2,
  },
  {
    name: 'eeegdfg',
    cost: '10',
    quantity: 1,
  },
];

const BasketOfProductsReducer = (state = initialState, action: BasketOfProductActionTypes): BasketOfProduct[] => {
  switch (action.type) {
    default:
      return state;
  }
};
export default BasketOfProductsReducer;
