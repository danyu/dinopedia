import React from 'react';
import DinoBasicInfo from './DinoBasicInfo';
import styles from './DinoProfile.module.css';

export default function DinoProfile({ dino }) {
  const { name, imgSrc } = dino;
  return (
    <div className={styles.profileContainer}>
      <div className={styles.dinoPicContainer}>
        <img src={imgSrc} alt={name} />
      </div>
      <DinoBasicInfo dino={{ ...dino }} ></DinoBasicInfo>
    </div>
  )
}
