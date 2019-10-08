import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductCard.module.scss';

const ProductCard = ( { product } ) => {
  const {image_url, name, tagline, description, abv, first_brewed} = product;
  return (
    <div className={styles.productCard}>
      <img src={image_url} alt={name} className={styles.productCard__image}/>

      <div>
        <h2 className={styles.productCard__name}><span>{name}</span></h2>
        <h3 className={styles.productCard__tagline}>{tagline}</h3>
        <p>{description}</p>
        <ul className={styles.productCard__tags}>
          <li className={styles.productCard__tag}>ABV: {abv}</li>
          <li className={styles.productCard__tag}>FIRST BREWED: {first_brewed}</li>
        </ul>
      </div>
    </div>
  );
}

ProductCard.propTypes =  {
  product: PropTypes.shape({
    image_url: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    tagline: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    abv: PropTypes.number.isRequired, 
    first_brewed: PropTypes.string.isRequired
  })
};


export default ProductCard;