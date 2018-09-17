import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home/Home";
import { connect } from "react-redux";
import ContextProvider from "../services/contextAPI/contextProvider";
import Navbar from "../components/navigation/navbar";
import Modal from '../components/common/modal/modal';
import Register from '../components/register/register';

class App extends Component {
  state = {
    showRegisterModal: true,
    showLoginForm: false
  }

  togleRegisterModal = () => {
    this.setState({showRegisterModal: !this.state.showRegisterModal});
  }
  
  togleLoginForm = () => {
    this.setState({showLoginForm: !this.state.showLoginForm});
  }

  render() {
    const { motive } = this.props;
    const { showRegisterModal, showLoginForm } = this.state;
    return (

      <ContextProvider value={motive}>
        <Router>
          <div id="app" style={{ background: motive.backgroundColor }}>
            <Navbar togleRegisterModal={this.togleRegisterModal} togleLoginForm={this.togleLoginForm} />

            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>

            <Modal show={showRegisterModal} showIcon close={this.togleRegisterModal}>
              <Register />
            </Modal>
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
