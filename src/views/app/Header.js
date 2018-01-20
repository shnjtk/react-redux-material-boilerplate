import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Sandbox</h1>
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
