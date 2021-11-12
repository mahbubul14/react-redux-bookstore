import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav flex">
    <h1>Bookstore CMS</h1>
    <ul className="navLink flex">
      <li>
        <Link to="/">Book</Link>
      </li>
      <li>
        <Link to="/categories" className="gray">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
