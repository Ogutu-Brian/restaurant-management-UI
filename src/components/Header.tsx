import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>Restaurant Reservations</div>
    </div>
  );
};

export default Header;
