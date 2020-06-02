import '../styles.css';
import React from 'react';
export default function DinoProfile({ name, imgSrc }) {
  return (
    <div>
      {/* <div>{name}</div> */}
      <img src={imgSrc} alt={name} />
    </div>
  )
}
