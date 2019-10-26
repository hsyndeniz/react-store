import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  total: totalReducer,
});
