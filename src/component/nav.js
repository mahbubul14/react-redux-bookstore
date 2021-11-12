import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="flex nav-container">
    <div className="nav flex">
      <h1>Bookstore CMS</h1>
      <ul className="navLink flex">
        <li>
          <Link to="/" className="black">Book</Link>
        </li>
        <li>
          <Link to="/categories" className="gray">Categories</Link>
        </li>
      </ul>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    </div>
  </nav>
);

export default Nav;
