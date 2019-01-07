// @flow
import React from 'react';
import './Header.css';

const Header = () => (
  <div className="Header">
    <h1>Digital Enterprises</h1>
    <nav className="navigation">
      <a href="/digital-enterprises">Digital Enterprises</a>
      <a href="/hogeschool-van-amsterdam">Hogeschool van Amsterdam</a>
      <a href="/diy">DIY Projecten</a>
      <a href="/contact">Contact</a>
      <a href="/" className="Menu">
        Menu
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </a>
    </nav>
  </div>
);

export default Header;
