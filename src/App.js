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
    console.log("is this ever called");
    this.setState(userObject);
  };

  getUser = () => {
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
  };

  getParties = () => {
    axios
      .get("/party/getParties")
      .then(response => {
        console.log("this", response.data.data.plan);
        this.setState({
          parties: response.data.data.plan
        });
      })
      .catch(error => {
        console.log("Get parties: no parties");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/" {...props} component={Plan} /> */}
        <Route
          path="/party/:id"
          render={props => <Plan {...props} parties={this.state.parties} />}
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
