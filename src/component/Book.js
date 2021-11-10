/* eslint-disable no-undef */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <ul>
      <li>
        <h3>{title}</h3>
        <p>{author}</p>
        <button type="submit" onClick={removeHandler}>Remove</button>
      </li>
    </ul>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

export default Book;
