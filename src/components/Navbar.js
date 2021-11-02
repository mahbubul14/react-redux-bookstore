import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h2>BookStore</h2>
    <ul>
      <li>
        <Link to="/Books">Books</Link>
      </li>
      <li>
        <Link to="/bookslist">BooksList</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
