import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Books from './components/Books';
import BooksList from './components/BooksList';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Books">
          <Books />
        </Route>
        <Route path="/bookslist">
          <BooksList />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
