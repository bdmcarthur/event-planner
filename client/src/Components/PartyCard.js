import React from "../../node_modules/react";
import WebFont from "../../node_modules/webfontloader";
import img1 from "../images/wide/1.jpg";
import img2 from "../images/wide/2.jpg";
import img3 from "../images/wide/3.jpg";
import img4 from "../images/wide/4.jpg";
import img5 from "../images/wide/5.jpg";
import img6 from "../images/wide/6.jpg";
let imgArr = [img1, img2, img3, img4, img5, img6];

const PartyCard = props => {
  let backgroundStyle;
  let fontStyleMain;
  let fontStyleBody;
  let party = props.party;

  if (party.design) {
    backgroundStyle = {
      backgroundImage: `url('${imgArr[party.design[0] - 1]}')`,
      minHeight: `100vh`
    };
    fontStyleMain = {
      fontFamily: party.design[1]
    };
    fontStyleBody = {
      fontFamily: party.design[2]
    };

    WebFont.load({
      google: {
        families: [party.design[1], party.design[2]]
      }
    });
  } else {
    backgroundStyle = {
      backgroundImage: `url('${imgArr[party.background - 1]}')`,
      minHeight: `100%`
    };
  }

  return (
    <div style={backgroundStyle} class="mx-auto party">
      <div className="container mx-auto py-5 party-container">
        <div class="row w-75 mx-auto justify-content-center mt-2">
          <div className="party-detail mx-auto">
            <h1 style={fontStyleMain} className="apply-font-mainFont">
              {party.title}
            </h1>
            <div className="mt-4">
              <p style={fontStyleBody} className="apply-font-bodyFont">
                <b>Where:</b> {party.address}
              </p>
              <p style={fontStyleBody} className="apply-font-bodyFont">
                <b>When:</b> {party.date}, {party.time}
              </p>
              <p style={fontStyleBody} className="apply-font-bodyFont mt-3">
                {party.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyCard;
