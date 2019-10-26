import React from 'react';
import Product from './Product';
import { Redirect } from "react-router-dom";

const ProductList = ({ products, menu, menus }) => {
  if (products !== null || products !== undefined) {
    return products.map(p => {
      return <Product menus={menus} menu={menu} product={p} key={p.name} />;
    });
  } else {
    return <Redirect to='/' />
  }

};

export default ProductList;
