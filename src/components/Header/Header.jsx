// @flow
import React from 'react';
import './Header.css';

const Header = () => (
  <div className="Header">
    <h1>Home</h1>
    <div className="navigation">
      <a href="/digital-enterprises">Digital Enterprises</a>
      <a href="/hogeschool-van-amsterdam">Hogeschool van Amsterdam</a>
      <a href="/contact">Contact</a>
      <a href="/" className="menu-button">
        Menu
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </a>
    </div>
  </div>
);

export default Header;
