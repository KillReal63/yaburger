import React from 'react';
import AppHeader from '../Components/AppHeader/AppHeader';
import Main from '../Components/Main/Main';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
