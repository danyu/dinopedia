import React from "react";
import DinoList from './components/DinoList';
import styles from './App.module.css';
import Header from './components/Header';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Nav />
      <div className={styles.main}>
        <DinoList />
      </div>

    </div>
  );
}
