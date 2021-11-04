import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const titleHandle = (e) => {
    setTitle(e.target.value);
  };

  const authorHandle = (e) => {
    setAuthor(e.target.value);
  };

  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      id: uuidv4(),
    };
    e.target.reset();
    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={addNewBook}>
      <input type="text" onChange={titleHandle} placeholder="Book Title" />
      <input type="text" onChange={authorHandle} placeholder="Book Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
