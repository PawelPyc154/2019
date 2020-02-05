import {
  BasketOfProductActionTypes,
  ADD_PRODUCT_TO_BASKET,
  REMOVE_PRODUCT_FROM_BASKET,
  UPDATE_PRODUCT_QUANTITY,
} from './actionType';

import BasketOfProduct from './BasketOfProduct';

const initialState: BasketOfProduct[] = [
  {
    name: 'Steak with vegetables',
    cost: 25,
    quantity: 2,
    imagePath: 'ChickenLivers',
  },
  {
    name: 'eeegdfg',
    cost: 10,
    quantity: 1,
    imagePath: 'EggBaguette',
  },
];

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
      if (action.payload.ProductQuantityValue <= 20 && action.payload.ProductQuantityValue >= 1) {
        return state.map(item => {
          if (item.name !== action.payload.Productname) {
            return { ...item };
          }

          return { ...item, quantity: action.payload.ProductQuantityValue };
        });
      }
      return state;

    default:
      return state;
  }
};
export default BasketOfProductsReducer;
