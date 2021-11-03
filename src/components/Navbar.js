import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <div className="navbar">
      <h1>Bookstore</h1>
      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
