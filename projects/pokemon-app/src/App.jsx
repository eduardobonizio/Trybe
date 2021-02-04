import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

//import { DEF_APP_ROUTES } from "./config/routes";

import Home from "./Pages/Home";
import PokeInfo from "./Pages/PokeInfo";

import store from "./Store";

export default function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/view/:id" component={PokeInfo} />
          {/* <Route path="/" exact component={Home} /> */}

          <Route path="/" exact component={Home} />
          {/* <Route path="/debug" component={Debug} /> */}

          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}
