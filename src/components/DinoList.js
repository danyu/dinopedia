import React, { useEffect, useState } from 'react';
import { getDinoList, MODE } from '../data/dataFetch';
import "../styles.css";
import DinoProfile from './DinoProfile';

function DinoList() {
  const [dinos, setDinos] = useState([]);
  const [dinoProfile, setDinoProfile] = useState({});

  function sortByName(data) {
    let _data = data;
    return data.sort(({ name: name1 }, { name: name2 }) => {
      let i = 0;
      let rst = false;
      while (i < name1.length && i < name2.length) {
        rst = rst || (name1.charCodeAt(i) - name2.charCodeAt(i));
        if (rst) return rst;
        i++;
      }
      return rst;
    })
  }

  useEffect(() => {
    getDinoList(MODE.remote).then(data => {
      setDinos(sortByName(data));
      setDinoProfile(data[0]);
    });
    // setDinos(data);
  }, [])

  const dinoClicked = (dino) => setDinoProfile(dino);

  return (
    <div className='main'>
      <div className='dino-name-list'>
        {dinos.map((dino) => {
          return (
            <div className={`dino-name-container ${dino.name === dinoProfile.name ? 'dino-name-selected' : ''}`} onClick={() => dinoClicked(dino)}>
              <div className='dino-name'>
                <span className='dino-name-text'>{dino.name}</span>
                <div className='progress-fill'></div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='dino-profile' >
        <DinoProfile {...dinoProfile} />
      </div>
    </div>
  )
}

export default DinoList;