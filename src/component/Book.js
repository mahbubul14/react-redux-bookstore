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
      <li className="item">
        <div className="column flex gray">
          <p>{book.category}</p>
          <p className="book-title">{book.title}</p>
          <div className="flex">
            <button className="gap-r btn" type="button">Comments</button>
            <button onClick={() => removeBookHandler(book.item_id)} type="button" className="rmBtn gap-r btn">Remove</button>
            <button className="gap-r btn" type="button">Edit</button>
          </div>
        </div>
      </li>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
