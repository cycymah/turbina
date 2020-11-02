import React from 'react';
import './App.css';

import DropLinks from './DropLinks';
import Header from './Header';
import Player from './Player';
import Main from './Main'

function App() {
  return (
    <div className="page">
     <DropLinks/>
      <Header />
      <Player />
      <Main />
    </div>
  );
}

export default App;
