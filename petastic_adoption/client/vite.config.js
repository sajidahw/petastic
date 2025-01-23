import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  // build: {
  //   outDir: "",
  // },
  plugins: [react()],
  server: {
    proxy: {
      "/": {
        target: "https://petastic.vercel.app", // Your backend server URL, http://localhost:8181
        changeOrigin: true, // Required for CORS to work
        secure: true, // If your backend uses HTTPS with a self-signed certificate, set to false
        // rewrite: (path) => path.replace(/^\/api/, ""), // Optional: remove the /api prefix when forwarding the request
      },
      "/api": {
        target: "https://petastic.vercel.app", // Your backend server URL, http://localhost:8181
        changeOrigin: true, // Required for CORS to work
        secure: true, // If your backend uses HTTPS with a self-signed certificate, set to false
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: remove the /api prefix when forwarding the request
      },
    },
  },
});
