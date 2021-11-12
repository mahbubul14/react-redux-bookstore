import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './component/BookList';
import Categories from './component/Categories';
import './App.css';
import Nav from './component/nav';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
