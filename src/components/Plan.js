import React from "react";

const Plan = props => {
  const partyId = props.match.params.id;
  const partyList = props.parties;
  let party = partyList.filter(plan => plan._id === partyId);

  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{party[0].title}</h5>
              <p class="card-text">{party[0].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
