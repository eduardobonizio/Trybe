import React from 'react';

import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store';
import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';
import Secure from './pages/Secure';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secure" exact component={Secure} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}
