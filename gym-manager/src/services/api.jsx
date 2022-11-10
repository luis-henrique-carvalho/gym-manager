import axios from "axios";
import { getUserLocalStorage } from "../context/Util";

export const api = axios.create({
  baseURL: "http://35.199.96.3",
});

// api.interceptors.request.use(
//   (config) => {
//     const user = getUserLocalStorage();

//     config.headers.Authorization = "Bearer: " + user.token;

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
