import React, { Component } from "react";
import ShareButtons from "../Components/ShareButtons";
import axios from "axios";

export default class Plan extends Component {
  constructor() {
    super();
    this.state = {
      currentParty: null,
      isOwner: false
    };
  }

  componentDidMount = props => {
    this.getParty();
  };

  checkOwner = props => {
    if (this.props.user && this.state.currentParty) {
      if (this.props.user._id === this.state.currentParty[0].user._id) {
        this.setState({
          isOwner: true
        });
      }
    }
  };

  getParty = props => {
    let partyID = this.props.match.params.id;
    axios
      .get(`/party/loadParty/${partyID}`)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            currentParty: response.data.data.plan
          });
          this.checkOwner();
        }
      })
      .catch(error => {
        console.log("Logout error", error);
      });
  };
  render() {
    let party = this.state.currentParty;
    return (
      <div>
        {party && (
          <div className="container w-75 mx-auto text-center">
            <h1>{party[0].title}</h1>
            <div className="card">
              <div className="card-body">
                <p className="card-title">Where: {party[0].address}</p>
                <p className="card-title">
                  When: {party[0].date}, {party[0].time}
                </p>
                <p className="card-text">Details: {party[0].description}</p>
              </div>
            </div>
            {this.state.isOwner && (
              <ShareButtons party={this.state.currentParty} />
            )}
          </div>
        )}
      </div>
    );
  }
}
