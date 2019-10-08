import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductGrid.module.scss';

import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ( { products } ) => {

      if (products.length > 0) {
        return (
          <div className={styles.productGrid}>
            {products.map( product => <ProductCard key={product.id} product={product} /> )}
          </div>
        )
      } else {

        return (
          <div className={styles.productGrid__error}>
            <h2>No results found</h2>
            <p>Please try clearing your search term</p>
          </div>
        )
      }
}


ProductGrid.propTypes =  {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductGrid;