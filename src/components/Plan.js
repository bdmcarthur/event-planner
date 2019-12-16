import React, { Component } from "react";
import {
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";
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
    this.checkOwner();
  };

  checkOwner = props => {
    console.log("user", this.props.user);
    if (this.props.user && this.state.currentParty) {
      if (this.props.user._id === this.state.currentParty[0].user._id) {
        this.setState({
          isOwner: true
        });
      }
    }
  };
  // componentDidUpdate = prevProps => {
  //   if (this.props.user && this.state.currentParty) {
  //     console.log("he");
  //     if (this.props.user !== prevProps.user) {
  //       if (this.props.user._id === this.state.currentParty[0].user._id) {
  //         this.setState({
  //           isOwner: true
  //         });
  //       }
  //     }
  //   }
  // };

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
              <div class="row w-75 mx-auto justify-content-center">
                <div class="col-12 my-4">
                  <h2 className="text-center">Share Your Party!</h2>
                </div>

                <div class="col-xs-4">
                  <TelegramShareButton
                    url={`http://localhost:3000/parties/${party[0]._id}`}
                  >
                    <TelegramIcon />
                  </TelegramShareButton>
                </div>

                <div class="col-xs-4">
                  <WhatsappShareButton
                    url={`http://localhost:3000/parties/${party[0]._id}`}
                    title={`Check out ${party[0].title}! Click on the link and enter ${party[0].partyCode} as the Party code to RSVP`}
                  >
                    <WhatsappIcon />
                  </WhatsappShareButton>
                </div>

                <div class="col-xs-4">
                  <EmailShareButton
                    url={`http://localhost:3000/parties/${party[0]._id}`}
                    subject={party[0].title}
                    body={`Check out my party! Click on the link and enter ${party[0].partyCode} as the Party code to RSVP`}
                  >
                    <EmailIcon />
                  </EmailShareButton>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
