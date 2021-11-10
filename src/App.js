import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from './component/BookStore';
import Categories from './component/Categories';
import './App.css';
import Nav from './component/nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
