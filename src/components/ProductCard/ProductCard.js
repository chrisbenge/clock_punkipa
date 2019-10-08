import React from 'react';

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


export default ProductCard;