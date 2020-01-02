import axios from "axios";

const authAPI = axios.create({
  baseURL: `/user`
});

export const signUpService = ({ username, password, name }) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/signup", {
        username,
        password,
        name
      })
      .then(response => {
        const user = response.data;
        resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const logInService = ({ username, password }) =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/login", { username, password })
      .then(response => {
        const user = response.data;
        resolve(user);
      })
      .catch(error => {
        reject(error);
      });
  });

export const logoutService = () =>
  new Promise((resolve, reject) => {
    authAPI
      .post("/logout")
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
