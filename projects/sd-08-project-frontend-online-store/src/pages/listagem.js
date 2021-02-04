import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListaCardProdutos from '../components/ListaCardProdutos';
import CategoriesList from '../components/CategoriesList';

class Listagem extends Component {
  render() {
    const { listOfProducts, addToCart, handleClickCategory, width } = this.props;
    return (
      <div className="container d-flex p-0">
        <CategoriesList handleClickCategory={ handleClickCategory } />
        <div
          className="show-products d-flex flex-wrap justify-content-center"
        >
          <ListaCardProdutos
            listOfProducts={ listOfProducts }
            addToCart={ addToCart }
            width={ width }
          />
        </div>
      </div>
    );
  }
}

Listagem.propTypes = {
  listOfProducts: PropTypes.arrayOf(PropTypes.object),
  addToCart: PropTypes.func.isRequired,
  handleClickCategory: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

Listagem.defaultProps = {
  listOfProducts: undefined,
};

export default Listagem;
