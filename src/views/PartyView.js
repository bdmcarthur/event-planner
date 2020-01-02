import React, { Component } from "react";
import ShareButtons from "../Components/ShareButtons";
import axios from "axios";
import PartyCard from "../Components/PartyCard";

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
    console.log(this.props.user);
    if (this.props.user && this.state.currentParty) {
      if (this.props.user._id === this.state.currentParty.user._id) {
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
            currentParty: response.data.data.plan[0]
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
          <div>
            <PartyCard party={party} />
            {this.state.isOwner && (
              <ShareButtons party={this.state.currentParty} />
            )}
          </div>
        )}
      </div>
    );
  }
}
