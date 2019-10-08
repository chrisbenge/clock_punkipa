import React from 'react';

import ProductCard from '../ProductCard/ProductCard';

const ProductGrid = ( { products } ) => (
    <div>
      <h1>Beers</h1>
      {products.map( product => <ProductCard key={product.id} product={product} /> )}
    </div>
  );

export default ProductGrid;