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

// now: /api/pets

// GET: Fetch all pets, /pets
router.get("/pets", getPets); // pets gallery page

// GET: Fetch a pet by id, /pets/:id; should /pet/:id; working as "/:id"
router.get("/pets/:id", getPetById); // fetching a pet by id

// POST: CREATE a new pet, /pets; should /pet/:id
router.post("/pet", createPet); // creating a pet
// router.post("/:id", createPet);

// PUT: UPDATE a pet by id, /pets/:id, should /pet/:id
router.put("/pets/:id", updatePet); // updating a pet

// DELETE: DELETE a pet by id by destructuring id from req.params, /pets/:id; should /pet/:id
router.delete("/pet/:id", deletePet); // deleting a pet

export default router;
