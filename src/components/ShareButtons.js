import React from "react";
import {
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

const ShareButtons = props => {
  let party = props.party;
  return (
    <div class="row w-75 mx-auto justify-content-center">
      <div class="col-12 my-4">
        <h2 className="text-center">Share Your Party!</h2>
      </div>

      <div class="col-xs-4">
        <TelegramShareButton
          url={`http://localhost:3000/parties/${party[0]._id}`}
        >
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
  );
};

export default ShareButtons;
