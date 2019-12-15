import axios from "axios";

const authAPI = axios.create({
  baseURL: `/`
});

export const addService = ({
  title,
  description,
  address,
  imageUrl,
  guestList
}) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/plan/add", {
        title,
        description,
        address,
        imageUrl,
        guestList
        // ,user: req.user._id
      })
      .then(response => {
        console.log(response);
        // const user = response.data.username;
        // resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });

// export const verifyService = () =>
//   new Promise((resolve, reject) => {
//     authAPI
//       .get("/verify")
//       .then(response => {
//         const user = response.data.user.user;
//         console.log("USER DATA SUCCES FROM verifyservice in auth", response);
//         resolve(user);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });

// export const logOutService = () =>
//   new Promise((resolve, reject) => {
//     authAPI
//       .post("/logout")
//       .then(() => {
//         resolve();
//         console.log("USER LOGGED OUT FROM THE SERVICE");
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });

// export const uploadImage = theFile => {
//   return new Promise((resolve, reject) => {
//     authAPI
//       .post("/upload", theFile)
//       .then(response => {
//         resolve(response);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// export const editUser = (name, id) => {
//   console.log("api", name);
//   return new Promise((resolve, reject) => {
//     authAPI
//       .patch(`/user/${id}/edit`, name, id)
//       .then(response => {
//         resolve(response);
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// };

// export const removeUser = name => {
//   return new Promise((resolve, reject) => {
//     authAPI
//       .delete(`/user/${name}`)
//       .then(() => {
//         resolve();
//       })
//       .catch(error => {
//         reject(error);
//         console.log("DELETION FAILED");
//       });
//   });
// };
