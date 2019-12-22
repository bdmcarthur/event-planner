import React, { Component } from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";
import "../App.css";
import { withRouter } from "react-router-dom";
import * as AuthServices from "../services/auth-services";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    };
  }

  logout = event => {
    event.preventDefault();
    AuthServices.logoutService()
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            loggedInUser: null
          });
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  };

  componentDidUpdate = prevProps => {
    if (this.props.loggedInUser) {
      if (this.props.loggedInUser !== prevProps.loggedInUser) {
        console.log("here", this.props.loggedInUser);
        this.setState({
          userId: this.props.loggedInUser
        });
      }
    }
  };

  render() {
    const loggedIn = this.props.loggedIn;
    let user;
    if (this.props.loggedInUser) {
      user = this.props.loggedInUser._id;
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="btn btn-link text-secondary">
          <span className="text-secondary">Home</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {loggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={`/profile/${user}`}
                  className="btn btn-link text-secondary"
                >
                  <span className="text-secondary">Profile</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="#"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary">Log Out</span>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">Sign up</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">Login</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
