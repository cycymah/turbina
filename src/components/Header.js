import React from 'react';
import './Header.css';
import DropLinks from './DropLinks';
import logo from '../images/turbina-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content-container">
        <a href="#" className="header__logo-link"></a>
        <DropLinks />
      </div>
      <h1 className="header__title-logo">
        <img src={logo} alt="Логотип Турбина" className="header__main-logo" />
      </h1>
    </header>
  );
};
export default Header;
