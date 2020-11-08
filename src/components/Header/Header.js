import React from 'react';
import './Header.css';
import DropLinks from '../DropLinks/DropLinks.js';
import logo from '../../images/turbina-logo.svg';
import Player from '../Player/Player';
import { use100vh } from 'react-div-100vh';

const Header = () => {
  const heigth = use100vh();
  const heigthNeeded = heigth - 10;
  return (
    <header className="header" style={{ height: heigthNeeded }}>
      <div className="header__content-container">
        <a href="#" className="header__logo-link"></a>
        <DropLinks />
      </div>
      <h1 className="header__title-logo">
        <img src={logo} alt="Логотип Турбина" className="header__main-logo" />
      </h1>
      <Player />
    </header>
  );
};
export default Header;
