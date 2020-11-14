import React from "react";
import DinoList from './components/DinoList';
import styles from './App.module.css';
import Nav from './components/Nav';
import AppBar from './components/AppBar';

export default function App() {
  return (
    <div className={styles.App}>
      <AppBar />
      <Nav />
      <div className={styles.main}>
        <DinoList />
      </div>
    </div>
  );
}
