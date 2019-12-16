import React from "react";
import {
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

const Plan = props => {
  let partyId = props.match.params.id;
  let partyList = props.parties;
  let party = "";
  let shareUrl = "www.brandymcarthur.com visit me here";
  if (props.parties) {
    party = partyList.filter(plan => plan._id === partyId);
  }

  return (
    <div>
      {party.length > 0 && (
        <div className="container w-75 mx-auto text-center">
          <h1>{party[0].title}</h1>
          <div className="card">
            <div className="card-body">
              <p className="card-title">Where: {party[0].address}</p>
              <p className="card-title">
                When: {party[0].date}, {party[0].time}
              </p>
              <p className="card-text">Details: {party[0].description}</p>
            </div>
          </div>

          <div class="row w-75 mx-auto justify-content-center">
            <div class="col-12 my-4">
              <h2 className="text-center">Share Your Party!</h2>
            </div>

            <div class="col-xs-4">
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon />
              </TelegramShareButton>
            </div>

            <div class="col-xs-4">
              <WhatsappShareButton
                url={`http://localhost:3000/parties/${party[0]._id}`}
                title={`Check out ${party[0].title}! Click on the link and enter ${party[0].partyCode} as the Party code to RSVP`}
              >
                <WhatsappIcon />
              </WhatsappShareButton>
            </div>

            <div class="col-xs-4">
              <EmailShareButton
                url={`http://localhost:3000/parties/${party[0]._id}`}
                subject={party[0].title}
                body={`Check out my party! Click on the link and enter ${party[0].partyCode} as the Party code to RSVP`}
              >
                <EmailIcon />
              </EmailShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
