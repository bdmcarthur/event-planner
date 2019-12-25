import React from "react";
import img1 from "../images/wide/1.jpg";
import img2 from "../images/wide/2.jpg";
import img3 from "../images/wide/3.jpg";
import img4 from "../images/wide/4.jpg";
import img5 from "../images/wide/5.jpg";
import img6 from "../images/wide/6.jpg";
let imgArr = [img1, img2, img3, img4, img5, img6];

const PartyCard = props => {
  let backgroundStyle = {
    backgroundImage: `url('${imgArr[props.imgUrl - 1]}')`
  };
  let party = props.party;
  return (
    <div style={backgroundStyle} class="mx-auto party">
      <div className="container mx-auto py-5 party-container">
        <div class="row w-75 mx-auto justify-content-center mt-2">
          <div className="party-detail mx-auto">
            <h1>{party.title}</h1>
            <div className="">
              <p className="">Where: {party.address}</p>
              <p className="">
                When: {party.date}, {party.time}
              </p>
              <p className="">Details: {party.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
