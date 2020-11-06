import React from 'react';
import './App.css';

import Header from './Header/Header';
// import Player from './Player';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header />
        {/* <Player audioFile={audioFile} /> */}
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
