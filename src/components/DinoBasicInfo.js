import React from 'react';
import { icons, iconBasePath } from '../constants';
import styles from './DinoBasicInfo.module.css';

function DinoBasicInfo({ dino }) {
  const keys = ['weight', 'height', 'length', 'diet', 'period'];
  return (
    <div className={styles.basicInfoContainer}>
      {
        keys.map((k) => {
          return (
            <div className={styles.basicInfo} key={k}>
              <img className={styles.icon} alt={k} src={iconBasePath + icons[k]} />
              <div className={styles.basicInfoTitle}>{k} </div>
              <div className={styles.basicInfoFact}> {dino[k] || 'n/a'}</div>
            </div>
          );
        })}
    </div>
  );
};

export default DinoBasicInfo;