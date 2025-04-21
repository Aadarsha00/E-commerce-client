import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("access_token");
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 3000,
  headers: {
    Authorization: `BEARER ${getToken()}`,
  },
});
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `BEARER ${token}`;
    }
    return config;
  },
  function (error) {
    //Handle error
    return Promise.reject(error);
  }
);
export default api;
