import axios from "axios";

import { API_URL } from "../config";
const apiUrl = API_URL;
const instance = axios.create({
  baseURL: `${apiUrl}`,
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error.message)
);
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      return response;
    } else {
      return Promise.reject("data fetching failed");
    }
  },
  (error) => Promise.reject(error.message)
);
const http = instance
export default http