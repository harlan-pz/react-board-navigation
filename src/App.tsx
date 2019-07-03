import React from 'react';
import Board from './components/Board/Board'
import styles from './App.module.scss'
const App: React.FC = () => {
  return (
   <div className={styles.app}>
     <Board/>
   </div>
  );
}

export default App;
