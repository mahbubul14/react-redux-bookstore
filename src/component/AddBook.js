import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const InsertBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <div>
        <h3>Add Book</h3>
        <input placeholder="Add Title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
        <input className="add-book" placeholder="Add Category" value={category} type="text" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit"> Add Book</button>
      </div>
    </form>
  );
};

export default InsertBook;
