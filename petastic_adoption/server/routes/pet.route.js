import express from "express";
import {
  createPet,
  deletePet,
  getPets,
  getPetById,
  updatePet,
} from "../controllers/pet.controller.js";

// to handle requests, all route endpoints for pets with prefix listed in server.js but following the suffices below;

// each route with related methods and endpoints + functions listed in pet.controller.js
const router = express.Router();

// base url includes: /api

// GET: Fetch all pets, /pets
router.get("/pets", getPets); // pets gallery page

// GET: Fetch a pet by id
router.get("/pet/:id", getPetById); // fetching a pet by id

// POST: CREATE a new pet, /pet/:id
router.post("/pet", createPet); // creating a pet
// router.post("/:id", createPet);

// PUT: UPDATE a pet by id, /pet/:id
router.put("/pet/:id", updatePet); // updating a pet

// DELETE: DELETE a pet by id by destructuring id from req.params, /pet/:id
router.delete("/pet/:id", deletePet); // deleting a pet

export default router;
