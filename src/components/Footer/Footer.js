import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">© Маршак, 2020.</p>
        <p className="footer__copyright">Сделано студентами&nbsp;
          <span>
            <a className="footer__link" target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;