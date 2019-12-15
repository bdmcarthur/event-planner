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
        console.log(response.data);
        const party = response.data.plan;
        resolve(party);
      })
      .catch(error => {
        reject(error);
      });
  });

// export const getParties = id => {
//   return new Promise((resolve, reject) => {
//     partyAPI
//       .get(`/getParties`)
//       .then(response => {
//         resolve(response.data.data.plan);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };
