import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const BookStore = () => (
  <div>
    <BookList />
    <h2>Welcome to BookStore</h2>
    <AddBook />
  </div>
);
export default BookStore;
