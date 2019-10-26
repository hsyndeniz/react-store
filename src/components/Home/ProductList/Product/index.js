import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Thumb from '../../../Thumb';
import { addProduct } from '../../../../services/cart/actions';

const Product = ({ product, menus, addProduct }) => {

  console.log(menus)

  const slugifyUrl = (input) => {
    return String(input).toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
  }

  return (
    <Link to={{ pathname: `/${slugifyUrl(product.name)}`, state: { product: product, menus: menus } }} className="shelf-item" style={{ textDecoration: 'none' }}>
      <div
        onClick={() => addProduct(product)}
        data-sku={product.key}>
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../../images/${product.image}`)}
          alt={product.name}/>
        <div className="shelf-item__buy-btn"> { product.name } </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
