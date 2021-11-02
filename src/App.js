import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/categories';
import Books from './components/books';
import Input from './components/input';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/books">
          <Books />
          <Input />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
