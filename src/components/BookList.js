import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Books from './Books';

const BookList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      {list.map((book) => (
        <div className="book" key={book.id}>
          <Books
            title={book.title}
            author={book.author}
            id={book.id}
          />
        </div>
      ))}
    </div>
  );
};

export default BookList;
