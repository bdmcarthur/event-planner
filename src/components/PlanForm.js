import React, { Component } from "react";
import * as PartyServices from "../services/party-services";
import { Redirect } from "react-router-dom";

class PlanForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>Plan Your Fabulous Event</h1>
        <form>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title for your party"
              value={this.props.state.title}
              onChange={this.props.handleChange}
            ></input>
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Address of your party"
              value={this.props.state.address}
              onChange={this.props.handleChange}
            ></input>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="title">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={this.props.state.date}
                onChange={this.props.handleChange}
              ></input>
            </div>
            <div className="form-group col-md-6">
              <label for="time">Time</label>
              <input
                type="time"
                className="form-control"
                id="time"
                name="time"
                value={this.props.state.time}
                onChange={this.props.handleChange}
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              rows="5"
              value={this.props.state.description}
              onChange={this.props.handleChange}
            ></textarea>
          </div>
          <button class="btn btn-secondary" onClick={this.props.designParty}>
            Design
          </button>
        </form>
      </div>
    );
  }
}

export default PlanForm;
