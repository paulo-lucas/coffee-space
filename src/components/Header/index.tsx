import React from 'react';
import { Link } from 'react-router-dom';

import cslogo from '../../assets/cslogo.png';
import './styles.css';

export default function Header() {

  return (
    <header>
      <div className="header-content limited-width-content">
        <Link className="homelink" to="/">
          <img src={cslogo} className="cslogo" alt="CoffeeSpace" />
          <h1 className="cstitle" >CoffeeSpace</h1>
        </Link>

        <nav>
          <ul className="ul-pages">
            <li className="li-page aaa">
              <Link className="pagelink" to="/">
                <h2>Home</h2>
              </Link>
            </li>

            <li className="li-page">
              <Link className="pagelink" to="/articles">
                <h2>Artigos</h2>
              </Link>
            </li>

            <li className="li-page">
              <Link className="pagelink" to="/writers">
                <h2>Redatores</h2>
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