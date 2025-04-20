import React, { useState } from 'react';
import image from "../style/assets/gericht.png";
import { Link } from 'react-router-dom'; // Make sure to import from 'react-router-dom'
import "../style/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <div id="navbar" className="header">
      <div className="container">
        <Link to="/"><img src={image} alt="gericht-logo" /></Link>
        <ul className={`main-ul ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li className="drop-down">
            <Link to="#">Pages <FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="drop-down-ul">
              <li><Link to="/Service">Service</Link></li>
              <li><Link to="/About">About</Link></li>
            </ul>
          </li>
          <li><Link to="/Contact">Contact</Link></li>
          <li className="drop-down">
            <Link to="#">Blogs <FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="drop-down-ul">
              <li><Link to="/Blog1">Blog 1</Link></li>
              <li><Link to="/Blog2">Blog 2</Link></li>
            </ul>
          </li>
        </ul>
        <form>
          <input type="search" placeholder="Search website" aria-label="Search" />
          <button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className="hidden" onClick={toggleMenu}>
          <span className="icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
