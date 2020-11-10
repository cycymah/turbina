import React from 'react';
import './App.css';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { ContextSongsData } from '../contexts/ContextSongsData';
import songsList from '../constants/songsList';

function App() {
  return (
    <ContextSongsData.Provider value={songsList}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </ContextSongsData.Provider>
  );
}

export default App;
