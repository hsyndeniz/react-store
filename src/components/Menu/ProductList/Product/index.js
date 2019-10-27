import React from 'react';
import { connect } from 'react-redux';
import Thumb from '../../../Thumb';
import ProductWithSubMenu from './ProductWithSubMenu';
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

export default connect(
  null,
  { addProduct }
)(Product);
