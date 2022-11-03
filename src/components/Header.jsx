import React from 'react';
import cn from 'classnames';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={cn(style.header)}>
      <div className={cn(style.logo_link)}>
        <Link to="/">
          <span className={cn(style.logo)}>NFT</span>
        </Link>
      </div>
      <ul className={cn(style.list)}>
        <Link to="/">
          <li className={cn(style.lists)}>Home</li>
        </Link>
        <li className={cn(style.lists)}>
          <a href="https://opensea.io/">About</a>
        </li>
        <li className={cn(style.lists)}>
          <a href="https://opensea.io/">Market Place</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
