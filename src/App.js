import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import Signup from "./Components/Sign-Up";
import LoginForm from "./Components/Login-Form";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PlanForm from "./Components/Plan-Form";
import Plan from "./Components/Plan";
import Profile from "./Components/Profile";
import * as PartyServices from "./services/party-services";
import ProtectedRoute from "./Components/ProtectedRoute";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loggedInUser: null,
      parties: null,
      redirectTo: null
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
          loggedInUser: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          loggedInUser: null
        });
      }
    });
  };

  getParties = () => {
    axios
      .get("/party/getParties")
      .then(response => {
        console.log();
        if (response.data.data.plan) {
          this.setState({
            parties: response.data.data.plan
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar
          logout={this.logout}
          updateUser={this.updateUser}
          loggedIn={this.state.loggedIn}
          loggedInUser={this.state.loggedInUser}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute
            path="/party/new"
            user={this.state.loggedInUser}
            render={props => <PlanForm exact getParties={this.getParties} />}
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
          <ProtectedRoute
            path="/profile/:id"
            user={this.state.loggedInUser}
            render={props => (
              <Profile
                exact
                {...props}
                user={this.state.loggedInUser}
                parties={this.state.parties}
              />
            )}
          />

          <Route
            path="/parties/:id"
            exact
            render={props => <Plan {...props} parties={this.state.parties} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
