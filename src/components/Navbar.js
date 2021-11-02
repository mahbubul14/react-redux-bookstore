import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>BookStore</h2>
    <ul>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
