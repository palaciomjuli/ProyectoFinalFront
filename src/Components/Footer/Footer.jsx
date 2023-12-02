import React from 'react';
import logo from '../../img/Juliana-Palacio-Millan-logos_transparent.ico';

export const Footer = ({ themeClass }) => {
  return (
    <footer>
      <a
        className={`footer ${themeClass}`}
        href="https://github.com/palaciomjuli"
        target="_blank"
        rel="noreferrer"
      >
        <p className="footer__p">Todos los derechos reservados</p>
        <img
          style={{ width: '40px', marginLeft: '10px', height: '40px' }}
          src={logo}
          alt="Juliana-logo"
        />
      </a>
    </footer>
  );
};
