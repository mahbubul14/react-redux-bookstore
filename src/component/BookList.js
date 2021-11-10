import React from 'react';
import Book from './Book';

const BookList = () => {
  const titles = [
    {
      title: 'Da Vinci Code',
      author: 'Dan Brown',
      id: 1,
    },
    {
      title: 'Lost of Symbols',
      author: 'Dan Brown',
      id: 2,
    },
    {
      title: 'Harry Porter',
      author: 'J.K. Rowling',
      id: 3,
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
