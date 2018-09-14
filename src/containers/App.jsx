import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home/Home';


class App extends Component {
  render() {
    return (
      <div id="app">
        <nav>Nawigacja</nav>

        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </div>
     
    );
  }
}

export default App;
