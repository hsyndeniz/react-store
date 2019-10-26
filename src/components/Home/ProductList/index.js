import React from 'react';

import Product from './Product';

const ProductList = ({ products, menus }) => {
  return products.map(p => {
    return <Product menus={menus} product={p} key={p.name} />;
  });
};

export default ProductList;
