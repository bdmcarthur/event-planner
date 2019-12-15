import React from "../../node_modules/react";
import { Link } from "../../node_modules/react-router-dom";

export default function home() {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home-title">Party Planner</h1>
        <div>
          <Link to="/party/new">
            <button
              type="button"
              href="/party/new"
              className="btn btn-secondary btn-lg m-3"
            >
              Start Planning!
            </button>
          </Link>
          <Link>
            <button type="button" className="btn btn-secondary btn-lg m-3">
              See Examples
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
