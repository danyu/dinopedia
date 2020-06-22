import React from 'react';
import { icons, iconBasePath } from '../constants';

function DinoBasicInfo({ dino }) {
  const keys = ['weight', 'height', 'length', 'diet'];
  return (
    <div className='basic-info-container'>
      {
        keys.map((k) => {
          return (<div key={k}>
            <div className='basic-info-row'>
              <img className='icon' src={iconBasePath + icons[k]} />
              <span className='basic-info-title'>{k} </span>: {dino[k] || 'n/a'}</div>
          </div>);
        })
      }
    </div>
  );
};

export default DinoBasicInfo;