import '../styles.css';
import React from 'react';
import DinoBasicInfo from './DinoBasicInfo';
export default function DinoProfile({ dino }) {
  const { name, imgSrc } = dino;
  return (
    <div className='profile-container'>
      <div className='dino-pic-container'>
        {/* <div>{name}</div> */}
        <img src={imgSrc} alt={name} />
      </div>
      <div>
        <DinoBasicInfo dino={{ ...dino }} ></DinoBasicInfo>
      </div>
    </div>
  )
}
