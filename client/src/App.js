import React, { Component } from "react";
import axios from "axios";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Signup from "./Components/SignUp";
import LoginForm from "./Components/LoginForm";
import Navbar from "./Components/Navbar";
import Home from "./views/HomeView";
import PartyCreateView from "./views/PartyCreateView";
import Plan from "./views/PartyView";
import Profile from "./views/ProfileView";
import PlanEdit from "./Components/PlanEdit";
import ProtectedRoute from "./Components/ProtectedRoute";
import * as PartyServices from "./services/party-services";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoaded: false,
      loggedIn: false,
      loggedInUser: null,
      parties: null,
      redirectTo: null
    };
  }

  componentDidMount = () => {
    this.getUser();
  };

  updateUser = userObject => {
    this.setState({
      userLoaded: true,
      loggedInUser: userObject.loggedInUser,
      loggedIn: userObject.loggedIn
    });

    if (this.state.loggedInUser) {
      this.getParties();
    }
  };

  getUser = () => {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        this.setState({
          userLoaded: true,
          loggedIn: true,
          loggedInUser: response.data.user
        });
        this.getParties();
      } else {
        this.setState({
          userLoaded: true,
          loggedIn: false,
          loggedInUser: null
        });
      }
    });
  };

  getParties = () => {
    let user = this.state.loggedInUser._id;
    PartyServices.getPartiesService({
      user
    })
      .then(party => {
        if (party.plan) {
          this.setState({
            parties: party.plan
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let userLoaded = this.state.userLoaded;
    return (
      <BrowserRouter>
        {userLoaded === true && (
          <Navbar
            logout={this.logout}
            updateUser={this.updateUser}
            loggedIn={this.state.loggedIn}
            loggedInUser={this.state.loggedInUser}
          />
        )}
        <Switch>
          <Route path="/" exact component={Home} />
          {userLoaded === true && (
            <ProtectedRoute
              path="/party/new"
              user={this.state.loggedInUser}
              render={props => (
                <PartyCreateView
                  exact
                  user={this.state.loggedInUser}
                  getParties={this.getParties}
                />
              )}
            />
          )}
          <Route
            path="/login"
            exact
            render={props => (
              <LoginForm {...props} updateUser={this.updateUser} />
            )}
          />
          <Route
            path="/signup"
            exact
            render={props => <Signup {...props} updateUser={this.updateUser} />}
          />
          {userLoaded === true && (
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
          )}
          {userLoaded === true && (
            <ProtectedRoute
              path="/parties/:id/edit"
              user={this.state.loggedInUser}
              render={props => (
                <PlanEdit exact {...props} user={this.state.loggedInUser} />
              )}
            />
          )}
          <Route
            path="/parties/:id"
            exact
            render={props => <Plan {...props} user={this.state.loggedInUser} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
