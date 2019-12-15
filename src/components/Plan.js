import React from "react";

const Plan = props => {
  const partyId = props.match.params.id;
  console.log(props.parties);
  // const currentParty = props.parties.filter(plan => plan._id === partyId);

  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              {/* <h5 class="card-title">{currentParty.title}</h5> */}
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
// import React from "react";

// function Plan(props) {
//   const currentRoute = props.match.params.id;
//   console.log(currentRoute);
//   return (
//     <div>
//       <h1>gjg</h1>
//     </div>
//   );
// }

// export default Plan;
