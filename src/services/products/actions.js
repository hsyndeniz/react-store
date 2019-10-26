import { FETCH_PRODUCTS } from './actionTypes';
import axios from 'axios';

import { productsAPI } from '../util';

export const fetchProducts = (callback) => dispatch => {
  return axios
    .get(productsAPI)
    .then(res => {
      console.log(res.data)
      let { menus } = res.data;
      if (!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: menus
      });
    })
    .catch(err => {
      console.log('Could not fetch products. Try again later.');
    });
};
