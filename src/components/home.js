import React from "../../node_modules/react";

export default function home() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home-title">Party Planner</h1>
        <div>
          <button type="button" className="btn btn-secondary btn-lg m-3">
            Start Planning!
          </button>
          <button type="button" className="btn btn-secondary btn-lg m-3">
            See Examples
          </button>
        </div>
      </div>
    </div>
  );
}
