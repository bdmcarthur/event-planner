import axios from "axios";

const partyAPI = axios.create({
  baseURL: `/party`
});

export const addService = ({
  user,
  title,
  description,
  address,
  imageUrl,
  guestList,
  time,
  date,
  design
}) =>
  new Promise((resolve, reject) => {
    partyAPI
      .post("/add", {
        user,
        title,
        description,
        address,
        imageUrl,
        guestList,
        time,
        date,
        design
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
      .post("/getParties", user)
      .then(response => {
        resolve(response.data.data);
      })
      .catch(error => {
        console.log("Parties", error);
      });
  });
