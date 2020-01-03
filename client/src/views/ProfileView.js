import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  let partyList = props.parties;
  console.log("party profile", props.parties);
  return (
    <div class="container">
      <h1>Hello</h1>
      <div class="row">
        {partyList ? (
          partyList.map(party => (
            <div class="col-5">
              <Link to={`/parties/${party._id}`}>
                <div class="card">
                  <div class="card-body">
                    <h1 class="card-title">{party.title}</h1>
                    <p class="card-text">{party.address}</p>
                    <p class="card-text">{party.date}</p>
                    <p class="card-text">{party.description}</p>
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
