import React from 'react';

const Input = () => (
  <form>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Book Author" />
    <button type="submit">Add Book</button>
  </form>
);

export default Input;
