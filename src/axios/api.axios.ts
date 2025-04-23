import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("access_token");
};

// Create API instance without hard-coded headers
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000, // Increased timeout slightly
});

// Add request interceptor to this specific instance
api.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `BEARER ${token}`; // Using your expected format
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add response interceptor for token expiration handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration or authentication errors
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      // Optional: Handle token expiration by redirecting to login
      // You could also try to refresh the token here
      console.log("Authentication error:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;
