import React from 'react';
import './App.css';

import DropLinks from './DropLinks';
import Header from './Header';
import Player from './Player';
import Main from './Main';

function App() {
  const audioFile = document.querySelector('.player__audio');
  return (
    <div className="page">
     <DropLinks/>
      <Header />
      <Player audioFile={audioFile} />
      <Main />
    </div>
  );
}

export default App;
