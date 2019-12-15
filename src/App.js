import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import Signup from "./Components/Sign-Up";
import LoginForm from "./Components/Login-Form";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import PlanForm from "./Components/Plan-Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
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

  render() {
    return (
      <div>
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route
          path="/signup"
          render={() => <Signup updateUser={this.updateUser} />}
        />
        <Route path="/plan/new" component={PlanForm} />
      </div>
    );
  }
}

export default App;
