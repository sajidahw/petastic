import axios from "axios";
// for db adoption, backend endpoints use /api/pets

const axiosC = axios.create({
  baseURL:
    import.meta.env.VITE_APP_API_URL || "https://petastic.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies and other credentials
});

export default axiosC;

//import.meta.env.VITE_APP_API_URL || "http://localhost:8181/api",
