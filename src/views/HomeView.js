import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home-title">Party Planner</h1>
        <div className="home-btns mt-4">
          <Link to="/party/new">
            <button
              type="button"
              href="/party/new"
              className="btn btn-secondary btn-lg m-3"
            >
              Start Planning!
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btn btn-secondary btn-lg m-3">
              See Examples
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
