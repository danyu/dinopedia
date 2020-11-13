import React, { useEffect, useState } from 'react';
import { getDinoList, MODE } from '../data/dataFetch';
import styles from "./DinoList.module.css";
import DinoProfile from './DinoProfile';

function DinoList() {
  const [dinos, setDinos] = useState([]);
  const [selectedDino, setSelectedDino] = useState({});

  function sortByName(data) {
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
      setSelectedDino(data[0]);
    });
    // setDinos(data);
  }, [])

  const dinoClicked = (dino) => setSelectedDino(dino);

  return (
    <div className={styles.main}>
      <div className={styles.dinoNameList}>
        {dinos.map((dino, i) => {
          const dinoNameClass = styles.dinoName + ' ' + (dino.name === selectedDino.name ? styles.dinoNameSelected : '');
          return (
            <div key={dino.name + i} className={dinoNameClass} onClick={() => dinoClicked(dino)}>
              {dino.name}
            </div>
          )
        })}
      </div>
      <DinoProfile dino={selectedDino} />
    </div>
  )
}

export default DinoList;