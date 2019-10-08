import React from 'react';

const ProductCard = ( { product } ) => (
  <div>
    {product.name}<br/>
    {product.tagline}<br />
    {product.description}<br />
    {product.abv}<br />
    {product.image_url}<br />
  </div>
);

export default ProductCard;