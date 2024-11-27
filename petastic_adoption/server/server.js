// setting up server/backend
require("dotenv").config();
const express = require("express");
const app = express();
// const axios = require("axios");
const cors = require("cors"); // frontend and backend are on different servers; accepts requests from different origins
const PORT = process.env.PORT || 8181;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://petastic-qshcbxkjo-summersws-projects.vercel.app",
    "https://petastic.vercel.app",
  ], // vite, vercel
  optionsSuccessStatus: 200 || 204,
  methods: "GET, POST, PUT, DELETE",
  headers: "Content-Type, Authorization",
  credentials: true,
  allowedOrigins: [
    "http://localhost:5173",
    "https://petastic-bv3nso98u-summersws-projects.vercel.app",
    "https://petastic.vercel.app/",
    "https://petastic-qshcbxkjo-summersws-projects.vercel.app",
    "http://localhost:8181",
  ],
  allow_origins_without_credentials: ["*"],
  allow_origins_with_credentials: [
    "https://petastic.vercel.app/",
    "https://petastic-bv3nso98u-summersws-projects.vercel.app",
    "http://localhost:8181",
    "https://petastic-qshcbxkjo-summersws-projects.vercel.app",
  ],
  "Access-Control-Allow-Origin": "https://petastic-qshcbxkjo-summersws-projects.vercel.app"
};

app.use(cors(corsOptions));

// routes
// index route for server to send info response to client
app.get("/", (req, res) => {
  res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
});

// URL Endpoints to access the rest of the website
//

// listen to the server
app.listen(PORT, () => {
  console.log(`Petastic Server is running on port ${PORT} 🐾`);
});
