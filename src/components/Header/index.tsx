import React from 'react';
import { Link } from 'react-router-dom';

import csLogo from '../../assets/cslogo_no_bkg.png';
import menuImg from '../../assets/menu.svg';
import './styles.css';

export default function Header() {

  return (
    <header>
      <label htmlFor="menu-checkbox" id="menu-btn">
        <img src={menuImg} alt="Menu" />
      </label>
      <input type="checkbox" id="menu-checkbox" />

      <div className="header-content limited-width-content">
        <Link className="homelink" to="/">
          <img src={csLogo} className="cslogo" alt="CoffeeSpace" />
          <h1 className="cstitle" >CoffeeSpace</h1>
        </Link>

        <nav>
          <ul className="ul-pages">
            <li className="li-page">
              <Link className="pagelink" to="/">
                <h2>Home</h2>
              </Link>
            </li>

            <li className="li-page">
              <Link className="pagelink" to="/posts">
                <h2>Posts</h2>
              </Link>
            </li>

            <li className="li-page">
              <Link className="pagelink" to="/convert">
                <h2>Conversor</h2>
              </Link>
            </li>

            <li className="li-page">
              <Link className="pagelink" to="/about">
                <h2>Sobre</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}