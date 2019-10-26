import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductWithSubMenu from './ProductWithSubMenu';

import Thumb from '../../../Thumb';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, menus, addProduct }) => {

  return product.subMenus === undefined ? (
    <div
      onClick={() => addProduct(product)}
      className="shelf-item"
      data-sku={product.name}>
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../images/${product.image}`)}
        alt={product.name}/>
      <p className="shelf-item__title">{product.name}</p>
      <div className="shelf-item__buy-btn"> { product.price }₺ </div>
    </div>
  ) : (<ProductWithSubMenu menus={menus} product={product} />);
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
