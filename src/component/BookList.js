import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import InsertBook from './AddBook';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <InsertBook />
    </ul>
  );
};

export default BookList;
