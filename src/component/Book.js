import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ id, title, author }) => (
  <div>
    <ul>
      <li key={id}>
        <h3>{title}</h3>
        <p>{author}</p>
      </li>
    </ul>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
