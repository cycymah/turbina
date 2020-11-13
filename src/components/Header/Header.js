import React, { useState, useEffect } from 'react';
import './Header.css';
import DropLinks from '../DropLinks/DropLinks.js';
import logo from '../../images/turbina-logo.svg';
import Player from '../Player/Player';
import { use100vh } from 'react-div-100vh';

const Header = ({ isSongListOpen, handleSongsList }) => {
  const heigth = use100vh();
  const heigthNeeded = heigth - 10;
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  // Стили для блюра
  let blurStyles = {
    filter: `${
      windowsWidth <= 490 && isSongListOpen ? 'blur(4px)' : 'blur(0)'
    }`,
  };

  // Записываем ширину окна
  const windowsSentWidth = () => {
    setWindowsWidth(innerWidth);
  };

  // Получаем ширину окна
  useEffect(() => {
    window.addEventListener('resize', windowsSentWidth);
    // return window.removeEventListener('resize', windowsSentWidth);
  });

  return (
    <header className="header" style={{ height: heigthNeeded }}>
      <div className="header__content-container">
        <a href="#" className="header__logo-link" style={blurStyles}></a>
        <DropLinks blurStyles={blurStyles} />
      </div>
      <h1 className="header__title-logo" style={blurStyles}>
        <img src={logo} alt="Логотип Турбина" className="header__main-logo" />
      </h1>
      <Player
        isSongListOpen={isSongListOpen}
        handleSongsList={handleSongsList}
      />
    </header>
  );
};
export default Header;
