import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <h3>ADD NEW BOOK</h3>
      <div className="insert">
        <input className="add-book" placeholder="Add Title" value={title} type="text" onChange={(e) => setTitle(e.target.value)} />
        <input className="category" placeholder="Add Category" value={category} type="text" onChange={(e) => setCategory(e.target.value)} />
        <button type="submit" className="submit"> ADD BOOK</button>
      </div>
    </form>
  );
};

export default AddBook;
