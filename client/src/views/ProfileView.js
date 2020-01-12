import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  let partyList = props.parties;

  return (
    <div className="container text-center party-list">
      <h1 className="my-4">Your Parties</h1>
      <div className="row mt-4 justify-content-center">
        {partyList ? (
          partyList.map(party => (
            <div className="col-12 col-md-4 mt-4">
              <Link to={`/parties/${party._id}`}>
                <div className="card text-center border-0">
                  <div className="card-body">
                    <h1 className="card-title">{party.title}</h1>
                    <p className="card-text">{party.address}</p>
                    <p className="card-text">{party.date}</p>
                    <p className="card-text">{party.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h3>Plan Something</h3>
        )}
      </div>
    </div>
  );
};

export default Profile;
