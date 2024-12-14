import express from "express";
import {
  createPet,
  deletePet,
  getPets,
  updatePet,
} from "../controllers/pet.controller.js";

// to handle requests, all route endpoints for pets with prefix listed in server.js but following the suffices below;

// each route with related methods and endpoints + functions listed in pet.controller.js
const router = express.Router();

// GET: Fetch all pets, /pets
router.get("/", getPets); // pets gallery page

// POST: CREATE a new pet, /pets
router.post("/", createPet); // creating a pet

// PUT: UPDATE a pet by id, /pets/:id
router.put("/:id", updatePet); // updating a pet

// DELETE: DELETE a pet by id by destructuring id from req.params, /pets/:id
router.delete("/:id", deletePet); // deleting a pet

export default router;
