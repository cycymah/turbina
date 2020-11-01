import React from 'react';
import './Header.css';
import logo from '../images/turbina-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content-container">
        <a href="#" className="header__logo-link"></a>
      </div>
      <img src={logo} alt="Логотип Турбина" className="header__main-logo" />
    </header>
  );
};
export default Header;
