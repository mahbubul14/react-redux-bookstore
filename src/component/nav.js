import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <h1>Welcome to bookstore CMS</h1>
    <ul className="navbar">
      <li>
        <Link to="/">Book</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
