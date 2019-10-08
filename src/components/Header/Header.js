import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.header__title}><span>Find your drink</span></h1>
  </header>
);

export default Header;