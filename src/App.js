import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Signup from "./Components/Sign-Up";
import LoginForm from "./Components/Login-Form";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PlanForm from "./Components/Plan-Form";
import Plan from "./Components/Plan";
import Profile from "./Components/Profile";
import * as PartyServices from "./services/party-services";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      parties: null
    };
  }

  componentDidMount = () => {
    this.getUser();
    this.getParties();
  };

  updateUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  };

  getParties = () => {
    axios
      .get("/party/getParties")
      .then(response => {
        this.setState({
          parties: response.data.data.plan
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route path="/" exact component={Home} />
        <Route
          exact
          path="/party/new"
          render={() => <PlanForm getParties={this.getParties} />}
        />
        <Route
          path="/login"
          exact
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route
          path="/signup"
          exact
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route
          path="/profile"
          exact
          render={() => <Profile parties={this.state.parties} />}
        />
        <Route
          path="/parties/:id"
          exact
          render={props => <Plan {...props} parties={this.state.parties} />}
        />
      </div>
    );
  }
}

export default App;
