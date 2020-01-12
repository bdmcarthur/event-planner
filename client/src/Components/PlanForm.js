import React from "../../node_modules/react";

const PlanForm = props => {
  return (
    <div className="container mb-5">
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
            value={props.state.title}
            onChange={props.handleChange}
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
            value={props.state.address}
            onChange={props.handleChange}
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
              value={props.state.date}
              onChange={props.handleChange}
            ></input>
          </div>
          <div className="form-group col-md-6">
            <label for="time">Time</label>
            <input
              type="time"
              className="form-control"
              id="time"
              name="time"
              value={props.state.time}
              onChange={props.handleChange}
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
            value={props.state.description}
            onChange={props.handleChange}
          ></textarea>
        </div>
        <button class="btn btn-secondary" onClick={props.designParty}>
          Design
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
