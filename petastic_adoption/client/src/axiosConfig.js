import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const axiosInstance = axios.create({
  baseURL: process.env.VITE_APP_API_URL || "/", // Base URL routes
  headers: {
    "Content-Type": "application/json",
  },
  //   withCredentials: true, // Include credentials if needed
});

// Add a response interceptor to handle global responses or errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can handle global errors here
    return Promise.reject(error);
  }
);

export default axiosInstance;
