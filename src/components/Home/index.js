import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/products/actions';

import Spinner from '../Spinner';
import ProductList from './ProductList';

import './style.scss';

class Home extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  handleFetchProducts = () => {
    this.props.fetchProducts(() => {
      console.log(this.props);
      console.log(this.state);
    });
  };

  render() {
    const { menus } = this.props;
    return (
      <React.Fragment>
        {menus.length < 1 ? <Spinner /> : (
          <div className="shelf-container">
            <ProductList menus={menus} products={menus[0].items} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  menus: state.products.products
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Home);
