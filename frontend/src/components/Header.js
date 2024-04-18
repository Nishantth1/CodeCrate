// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/problems">Problems</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
