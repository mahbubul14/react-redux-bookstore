import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <li>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <button onClick={() => removeBookHandler(book.id)} type="button">Remove</button>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
