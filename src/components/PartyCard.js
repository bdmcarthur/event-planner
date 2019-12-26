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
  let fontStyleMain = {
    fontFamily: props.font
  };
  let party = props.party;
  return (
    <div style={backgroundStyle} class="mx-auto party">
      <div className="container mx-auto py-5 party-container">
        <div class="row w-75 mx-auto justify-content-center mt-2">
          <div className="party-detail mx-auto">
            <h1 className="apply-font-mainFont">{party.title}</h1>
            <div className="mt-4">
              <p className="apply-font-bodyFont">
                <b>Where:</b> {party.address}
              </p>
              <p className="apply-font-bodyFont">
                <b>When:</b> {party.date}, {party.time}
              </p>
              <p className="apply-font-bodyFont mt-3">{party.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
