// Description: Backend server for Petastic Adoption website

// setting up server/backend
import dotenv from "dotenv";
import express from "express";
import cors from "cors"; // frontend and backend are on different servers; accepts requests from different origins
import { connectDB } from "./config/db.js";
import petRoutes from "./routes/pet.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8181;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://petastic.vercel.app",
    "http://localhost:8181",
  ], // vite, vercel
  optionsSuccessStatus: 200 || 204,
  methods: "GET, POST, PUT, DELETE, HEAD, PATCH, OPTIONS",
  headers: "Content-Type, Authorization",
  allowedHeaders: ["Content-Type", "Authorization"],
  "Access-Control-Allow-Origin": [
    "https://petastic.vercel.app",
    "http://localhost:8181/",
    "http://localhost:8181",
  ],
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Credentials": "true",
  credentials: true,
  allowedOrigins: [
    "http://localhost:5173",
    "http://localhost:5174",
    "http://localhost:4173",
    "https://petastic.vercel.app/",
    "http://localhost:8181/", // defined line 58,
    "http://localhost:8181",
    "https://p.typekit.net",
  ],
  allow_origins_without_credentials: ["*"],
  allow_origins_with_credentials: [
    "https://petastic.vercel.app/",
    "http://localhost:8181",
  ],
};

app.use(express.json()); // allows server to accept JSON data in req.body
app.use(cors(corsOptions));

// routes with endpoints
// index route for server to send info response to client
app.get("/", (req, res) => {
  res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
});

// URL Endpoints to access the rest of the website
// testing this endpoint in the browser: http://localhost:8181/pets
app.use("/", petRoutes); // all routes for pets via pet.route.js instead of /pets

// static routes are managed on client side's app.jsx

// listen to the server
const server = app.listen(PORT, () => {
  console.log(`Petastic Server is running on port ${PORT} 🐾`);
  connectDB();
});

process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully.");
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
// exporting the Express API to Vercel to be a serverless function
// module.exports = app;
export default app;
