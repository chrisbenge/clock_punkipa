import React from 'react';

const ProductCard = ( { product } ) => (
  <div>
    <img src={product.image_url} alt={product.name} />
    {product.name}<br/>
    {product.tagline}<br />
    {product.description}<br />
    {product.abv}<br />
  </div>
);

export default ProductCard;