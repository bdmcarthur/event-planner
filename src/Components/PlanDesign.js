import React, { Component } from "react";
import * as PartyServices from "../services/party-services";
import { Redirect } from "react-router-dom";
import Background from "./Backgrounds";

class PlanEdit extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      date: "",
      time: "",
      address: "",
      imageUrl: "",
      guestList: "",
      redirectTo: null
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time
    } = this.state;
    PartyServices.addService({
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time
    })
      .then(response => {
        this.setState({
          redirectTo: `/parties/${response._id}`
        });
        this.props.getParties();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Background />
        </div>
      );
    }
  }
}

export default PlanEdit;
