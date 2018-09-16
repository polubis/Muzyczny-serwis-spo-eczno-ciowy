import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import { connect } from "react-redux";
import ContextProvider from "../services/contextAPI/contextProvider";
import Navbar from "../components/navigation/navbar";

class App extends Component {
  render() {
    const { motive } = this.props;
    return (
      <ContextProvider value={motive}>
        <Router>
          <div id="app" style={{ background: motive.backgroundColor }}>
            <Navbar />

            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </div>
        </Router>
      </ContextProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    motive: state.DesignReducer.motive
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
