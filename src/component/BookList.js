import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import AddBook from './AddBook';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="list">
      <h2>List of books:</h2>
      <p>
        {books.map((book) => (
          <Book key={book.item_id} book={book} />
        ))}
      </p>
      <AddBook />
    </div>
  );
};

export default BookList;
