import { combineReducers } from 'redux';
import BasketOfProductsReducer from './BasketOfProducts/reducer';

const allReducers = combineReducers({
  BasketOfProductsReducer,
});

export type AppState = ReturnType<typeof allReducers>;
export default allReducers;
