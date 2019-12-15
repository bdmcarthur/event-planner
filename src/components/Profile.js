import React from "react";
import { Link } from "../../node_modules/react-router-dom";

const Profile = props => {
  let partyList = props.parties;
  return (
    <div class="container">
      <h1>Profile</h1>

      {partyList ? (
        partyList.map(party => (
          <Link to={`parties/${party._id}`}>
            <div class="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h1 class="card-title">{party.title}</h1>
                    <p class="card-text">{party.address}</p>
                    <p class="card-text">{party.date}</p>
                    <p class="card-text">{party.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h3>Plan Something</h3>
      )}
    </div>
  );
};

export default Profile;
