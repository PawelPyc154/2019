import { BasketOfProductActionTypes, SET_INPUT_CHOISE } from './actionType';

import BasketOfProduct from './BasketOfProduct';

const initialState: BasketOfProduct[] = [
  {
    name: 'Steak with vegetables',
    cost: '25',
    quantity: 2,
    imagePath: 'ChickenLivers',
  },
  {
    name: 'eeegdfg',
    cost: '10',
    quantity: 1,
    imagePath: 'EggBaguette',
  },
];

const BasketOfProductsReducer = (state = initialState, action: BasketOfProductActionTypes): BasketOfProduct[] => {
  switch (action.type) {
    case SET_INPUT_CHOISE:
      if (
        !state.find(item => {
          return item.name === action.payload.name;
        })
      ) {
        return [...state, action.payload];
      }

      return state;
    default:
      return state;
  }
};
export default BasketOfProductsReducer;
