import React from 'react';
import './App.css';


import Header from './Header';
import Player from './Player';
import Main from './Main';
import Footer from './Footer';

function App() {
  const audioFile = document.querySelector('.player__audio');
  return (
    <div className="page">
     
      <Header />
      <Player audioFile={audioFile} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
