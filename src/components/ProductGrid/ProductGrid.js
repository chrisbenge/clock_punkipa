import React from 'react';

import styles from './ProductGrid.module.scss';

import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ( { products } ) => (
    <div className={styles.productGrid}>
      {products.map( product => <ProductCard key={product.id} product={product} /> )}
    </div>
  );

export default ProductGrid;