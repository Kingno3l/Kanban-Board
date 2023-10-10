import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
import logo from './images/logo.png';

const Navigation = () => (
  <div>
    <header className="header">
      <h1 className="title">
        <span className="logo-container">
          <img src={logo} alt="" className="logo" />
          <span>Space Travellers Hub</span>
        </span>
      </h1>
      <nav className="nav-bar">
        <ul className="nav-lists">
          <li className="items-list">
            <NavLink to="/">Rocket</NavLink>
          </li>
          <li className="items-list">
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li className="items-list">
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <div className="hr" />
  </div>
);
export default Navigation;
