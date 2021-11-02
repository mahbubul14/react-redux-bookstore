import React from 'react';

const Books = () => (
  <div>
    <ul>
      <li><button type="submit">Remove</button></li>
    </ul>
    <form>
      <h4>Add NEW BOOK</h4>
      <input type="text" placeholder="Book title" />
      <select type="category" value="Category">
        <option>Novel</option>
        <option>Action</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default Books;
