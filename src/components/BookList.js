import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const BookList = () => {
  const list = useSelector((state) => state.booksReducer);

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
