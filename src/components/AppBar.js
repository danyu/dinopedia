import React from 'react';
import DinoList from './DinoList';
import styles from './Header.module.css';

export default function () {
  return (
    <div className={styles.nav}>
      <div>Welcome to Eric & Ethan's DinoPedia</div>
    </div>
  )
}