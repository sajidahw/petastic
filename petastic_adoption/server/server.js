// setting up server/backend
require("dotenv").config();
const express = require("express");
const app = express();
// const axios = require("axios");
const cors = require("cors"); // frontend and backend are on different servers; accepts requests from different origins
const PORT = process.env.PORT || 8181;
const corsOptions = {
  origin: "http://localhost:5173", // vite
  optionsSuccessStatus: 200 || 204,
  methods: "GET, POST, PUT, DELETE",
  headers: "Content-Type, Authorization",
  allowedOrigins: [
    "http://localhost:5173",
    "https://petastic-bv3nso98u-summersws-projects.vercel.app",
  ],
  allow_origins_without_credentials: ["*"],
  allow_origins_with_credentials: [
    "https://petastic.vercel.app/",
    "https://petastic-bv3nso98u-summersws-projects.vercel.app",
    "http://localhost:8181",
  ],
};

app.use(cors(corsOptions));

// routes
// index route for server to send info response to client
app.get("/", (req, res) => {
  res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
});

app.head("/", (req, res) => {
  res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
});

app.head("/register", (req, res) => {
  res.send(`'Register for an account on Petastic. 🐈'`);
});

app.head("/login", (req, res) => {
  res.send(`'Login to your account on Petastic. 🐇'`);
});

app.head("/pet", (req, res) => {
  res.send(`'Submit a pet listing to Petastic. 🐩'`);
});

app.head("/pets", (req, res) => {
  res.send(`'View available pets on Petastic. 🐩'`);
});

app.head("/faq", (req, res) => {
  res.send(`'Frequently Asked Questions on Petastic. 🐕'`);
});

// URL Endpoints to access the rest of the website
//

// listen to the server
app.listen(PORT, () => {
  console.log(`Petastic Server is running on port ${PORT} 🐾`);
});
