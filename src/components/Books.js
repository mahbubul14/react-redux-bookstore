import React from 'react';

const Books = () => (
  <div>
    <h4>List of books</h4>
    <li>
      <button type="button">Remove</button>
    </li>
    <form>
      <input type="text" name="title" placeholder="Book Title" />
      <input type="text" name="author" placeholder="Book Author" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Books;
