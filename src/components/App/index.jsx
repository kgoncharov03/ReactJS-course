import React from 'react';
import thunk from 'redux-thunk';
import reducer from 'reducers/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import Tasks from 'components/Tasks';
import Projects from 'components/Projects';

const store = createStore(reducer, applyMiddleware(thunk));

const Header = () => (
  <div>
    <Link to='/projects'>
      <h1>Проекты</h1>
    </Link>
  </div>
)

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path='/projects'>
        <Projects />
      </Route>
      <Route path='/projects/:id' render={props => <Tasks id={props.match.params.id} />} />
    </Router>
  </Provider>
);

export default App;
