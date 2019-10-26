import React, { Component } from 'react';
import ProductList from './ProductList';
import FloatCart from '../FloatCart';
import { connect } from 'react-redux';

export class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
       
    }
  }
  
  componentDidMount() {
    console.log('-**---');
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="shelf-container">
            <ProductList menus={this.props.menus} menu={this.props.menu} products={this.props.menu.items} />
          </div>
        </main>
        <FloatCart />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return { menu: state.cart.productToAdd, menus: state.products.products }
};

export default connect(mapStateToProps)(Menu);

