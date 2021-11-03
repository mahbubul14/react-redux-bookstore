import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import store from './redux/cofigureStore';
import AllBooks from './components/BooksList';
import Categories from './components/Categories';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <AllBooks />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
