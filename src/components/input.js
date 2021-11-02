import React from 'react';

const Input = () => (
  <form>
    <h4>Add NEW BOOK</h4>
    <input type="text" placeholder="Book title" />
    <select type="category" value="Category">
      <option>Novel</option>
      <option>Action</option>
    </select>
    <button type="submit">Add Book</button>
  </form>
);

export default Input;
