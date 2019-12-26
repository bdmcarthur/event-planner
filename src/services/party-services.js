import axios from "axios";

const partyAPI = axios.create({
  baseURL: `/party`
});

export const addService = ({
  title,
  description,
  address,
  imageUrl,
  guestList,
  time,
  date,
  background,
  mainFont,
  bodyFont
}) =>
  new Promise((resolve, reject) => {
    partyAPI
      .post("/add", {
        title,
        description,
        address,
        imageUrl,
        guestList,
        time,
        date,
        background,
        mainFont,
        bodyFont
      })
      .then(response => {
        const party = response.data.data.plan;
        resolve(party);
      })
      .catch(error => {
        reject(error);
      });
  });

export const getPartiesService = user =>
  new Promise((resolve, reject) => {
    partyAPI
      .get("/getParties", user)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(error => {
        console.log("Parties", error);
      });
  });
