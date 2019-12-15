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
  date
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
        date
      })
      .then(response => {
        const party = response.data.data.plan;
        resolve(party);
      })
      .catch(error => {
        reject(error);
      });
  });
