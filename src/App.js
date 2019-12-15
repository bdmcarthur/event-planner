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
    this.getParties = this.getParties.bind(this);
    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getParties();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  getParties() {
    axios
      .get("party/getParties")
      .then(response => {
        this.setState({
          parties: response.data.data.plan
        });
      })
      .catch(error => {
        console.log("Get parties: no parties");
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/party/:id"
          parties={this.state.parties}
          component={Plan}
        />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route
          path="/signup"
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route
          path="/profile"
          render={() => <Profile parties={this.state.parties} />}
        />
        {/* <Route
          path="/party/:id"
          render={() => <Plan parties={this.state.parties} />}
        /> */}
        <Route path="/party/new" component={PlanForm} />
      </div>
    );
  }
}

export default App;
