import React, { Component } from 'react';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

class CartProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      isMouseOver: false
    };
  }

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const { removeProduct } = this.props;
    const { product } = this.state;

    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src={require(`../../../images/${product.image}`)}
          alt={product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{product.name}</p>
        </div>
        <div className="shelf-item__price">
          <p>{` ${formatPrice(product.price)} ₺`}</p>
        </div>
      </div>
    );
  }
}

export default CartProduct;
