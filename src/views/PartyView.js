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
    // let body =   background-image: url("images/wide/1.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    // height: 95vh;
    let party = this.state.currentParty;
    return (
      <div class="mx-auto party">
        {party && (
          <div className="container mx-auto py-5 party-container">
            <div className="party-detail mx-auto">
              <h1>{party[0].title}</h1>
              <div className="">
                <p className="">Where: {party[0].address}</p>
                <p className="">
                  When: {party[0].date}, {party[0].time}
                </p>
                <p className="">Details: {party[0].description}</p>
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
