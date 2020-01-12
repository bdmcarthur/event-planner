import React from "../../node_modules/react";
import WebFont from "../../node_modules/webfontloader";

const PartyCard = props => {
  let backgroundStyle;
  let fontStyleMain;
  let fontStyleBody;
  let party = props.party;

  if (party.design) {
    backgroundStyle = {
      backgroundImage: `url('/images/${party.design[0]}.jpg')`,
      minHeight: `100vh`,
      backgroundAttachment: "fixed"
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
      backgroundImage: `url('/images/${props.party.background}.jpg')`,
      minHeight: `100%`,
      fontSize: ".75rem"
    };
  }

  return (
    <div style={backgroundStyle} class="mx-auto party">
      <div className="container mx-auto py-5 party-container">
        <div class="row w-90 mx-auto justify-content-center mt-2">
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
