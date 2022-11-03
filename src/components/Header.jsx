import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="logo_link">
        <Link to="/">
          <span className="logo">NFT</span>
        </Link>
      </div>
      <ul className="list">
        <Link to="/">
          <li className="lists">Home</li>
        </Link>
        <li className="lists">
          <a href="https://opensea.io/">About</a>
        </li>
        <li className="lists">
          <a href="https://opensea.io/">Market Place</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
