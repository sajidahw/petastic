import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.VITE_APP_API_URL || "/", // Base URL routes
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
