import {
  BasketOfProductActionTypes,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_PRODUCT_QUANTITY,
  LOAD_PRODUCTS,
} from './actionType';

import BasketOfProduct from './BasketOfProduct';

const initialState: BasketOfProduct[] = [];

const BasketOfProductsReducer = (state = initialState, action: BasketOfProductActionTypes): BasketOfProduct[] => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      if (
        !state.find(item => {
          return item.name === action.payload.name;
        })
      ) {
        return [...state, action.payload];
      }
      return state;

    case REMOVE_PRODUCT_FROM_BASKET:
      return state.filter(item => item.name !== action.payload);
    case UPDATE_PRODUCT_QUANTITY:
      if (action.payload.productQuantityValue <= 20 && action.payload.productQuantityValue >= 1) {
        return state.map(item => {
          if (item.name !== action.payload.productname) {
            return { ...item };
          }

          return { ...item, quantity: action.payload.productQuantityValue };
        });
      }
      return state;
    case LOAD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
export default BasketOfProductsReducer;
