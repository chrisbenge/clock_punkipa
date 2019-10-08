import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductGrid.module.scss';

import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ( { products } ) => (
  <div className={styles.productGrid}>
    {products.map( product => <ProductCard key={product.id} product={product} /> )}
  </div>
);

ProductGrid.propTypes =  {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductGrid;