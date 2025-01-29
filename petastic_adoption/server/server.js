// Description: Backend server for Petastic Adoption website

// setting up server/backend
import dotenv from "dotenv";
import express from "express";
import cors from "cors"; // frontend and backend are on different servers; accepts requests from different origins
import { connectDB } from "./config/db.js";
import petRoutes from "./routes/pet.route.js";
import { getPets } from "./controllers/pet.controller.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8181;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://petastic.vercel.app/api",
    "https://petastic.vercel.app",
    "http://localhost:8181",
    // "http://localhost:8181/api",
  ], // vite, vercel
  // optionsSuccessStatus: 200 || 204,
  methods: "OPTIONS, GET, POST, PUT, DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(express.json({ limit: "10mb" })); // allows server to accept JSON data in req.body
app.use(express.urlencoded({ extended: true, limit: "10mb" })); // allows server to accept data in URL

app.use(cors(corsOptions));

// routes with endpoints
// index route for server to send info response to client
// app.get("/", (req, res) => {
//   res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
// });
app.get("/", (req, res) => {
  // res.json({ message: `'Welcome to Petastic, an Animal Adoption site. 🐕'` });
  res.send(`'Welcome to Petastic, an Animal Adoption site. 🐕'`);
});

// URL Endpoints to access the rest of the website
// testing this endpoint in the browser: http://localhost:8181/pets
// app.use("/pets", petRoutes); // all routes for pets via pet.route.js instead of /pets

// app.get("/api/pets", getPets); // one route to see all pets

// app.use("/pet", petRoutes); // all routes for pets via pet.route.js instead of /pets// **POSSIBLE TO USE /pet instead of /pets and keep /pets just for gallery??

app.use("/api", petRoutes); // all routes for db via pet.route.js  ie /api/pets or /api/pet/:id

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
