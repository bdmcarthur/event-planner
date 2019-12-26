import React, { Component } from "react";
import * as PartyServices from "../services/party-services";
import { Redirect } from "react-router-dom";
import PlanForm from "../Components/PlanForm";
import PartyCard from "../Components/PartyCard";
import Backgrounds from "../Components/Backgrounds";
import FontPicker from "../Components/FontPicker";

class PartyCreateView extends Component {
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
      planStage: "text",
      redirectTo: null,
      design: 1,
      mainFont: "Abril Fatface",
      bodyFont: "Playfair Display"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClick = (state, value) => {
    console.log("cllllick", state, value);
    this.setState({
      [state]: value
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
      time,
      background,
      mainFont,
      bodyFont
    } = this.state;
    PartyServices.addService({
      title,
      description,
      address,
      imageUrl,
      guestList,
      date,
      time,
      design: [background, mainFont, bodyFont]
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

  fontChange = (state, font) => {
    this.setState({
      [state]: font
    });
  };

  designParty = event => {
    event.preventDefault();
    this.setState({
      planStage: "design"
    });
  };

  render() {
    console.log(this.state.activeFontFamily);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else if (this.state.planStage === "text") {
      return (
        <PlanForm
          state={this.state}
          handleChange={this.handleChange}
          designParty={this.designParty}
        />
      );
    } else {
      return (
        <div className="container">
          <PartyCard party={this.state} imgUrl={this.state.design} />
          <div className="container mt-3 mx-auto text-center">
            {this.state.planStage === "design" ? (
              <div>
                <button
                  className="btn btn-secondary mx-2 mt-3"
                  onClick={() => {
                    this.handleClick("planStage", "backgrounds");
                  }}
                >
                  Change Background
                </button>
                <button
                  className="btn btn-secondary mx-2 mt-3"
                  onClick={() => {
                    this.handleClick("planStage", "fonts");
                  }}
                >
                  Change Fonts
                </button>
              </div>
            ) : this.state.planStage === "backgrounds" ? (
              <div>
                <Backgrounds handleClick={this.handleClick} />
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    this.handleClick("planStage", "fonts");
                  }}
                >
                  Change Fonts
                </button>
              </div>
            ) : (
              <div className="picker-font">
                <h3>Party Title Font</h3>
                <FontPicker
                  name="mainFont"
                  fontChange={("titleFont", this.fontChange)}
                  defaultFont={this.state.mainFont}
                />
                <h3>Party Body Font</h3>
                <FontPicker
                  name="bodyFont"
                  fontChange={("bodyFont", this.fontChange)}
                  defaultFont={this.state.bodyFont}
                />
                <button
                  className="btn btn-secondary mt-3"
                  onClick={() => {
                    this.handleClick("planStage", "backgrounds");
                  }}
                >
                  Change Background
                </button>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success btn-lg d-block mx-auto mt-3"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          ;
        </div>
      );
    }
  }
}

export default PartyCreateView;
