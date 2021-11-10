import React from 'react';
import AddBook from './AddBook';
import BookList from './BookList';

const BookStore = () => (
  <div>
    <h1>Welcome to Bookstore web app</h1>
    <BookList />
    <AddBook />
  </div>
);

export default BookStore;
