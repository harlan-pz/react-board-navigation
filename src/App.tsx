import React from 'react';
import Board from './components/Board/Board'
import styles from './App.module.scss'
import SearchBar from './components/SearchBar/SearchBar'
const App: React.FC = () => {
  return (
   <div className={styles.app}>
     <div className={styles.board}>
      <SearchBar/>
      <Board/>
     </div>
     
   </div>
  );
}

export default App;
