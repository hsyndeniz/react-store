import { UPDATE_CART } from './actionTypes';

export const updateCart = cartProducts => dispatch => {

  let productQuantity = cartProducts.length;

  let totalPrice = 0;

  cartProducts.map((p) => {
    totalPrice += p.price;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
