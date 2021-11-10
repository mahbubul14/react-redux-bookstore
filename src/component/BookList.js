import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';

const BookList = () => {
  const titles = [
    {
      title: 'Da Vinci Code',
      author: 'Dan Brown',
      id: uuidv4(),
    },
    {
      title: 'Lost of Symbols',
      author: 'Dan Brown',
      id: uuidv4(),
    },
    {
      title: 'Harry Porter',
      author: 'J.K. Rowling',
      id: uuidv4(),
    },
  ];

  return (
    <div>
      <h2>List of Books:</h2>
      {titles.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default BookList;
