// functions that will be called when the routes are hit
import Pet from "../models/pet.model.js";
import mongoose from "mongoose";

// GET: Fetch all pets, /pets
export const getPets = async (req, res) => {
  try {
    const pets = await Pet.find({}); // empty {} to fetch pets from db
    res.status(200).json({ success: true, data: pets });
  } catch (error) {
    console.log("Error in Fetching Pets: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}; // pets gallery page

// GET: Fetch a pet by id, /pets/:id
export const getPetById = async (req, res) => {
  const { id } = req.params.id; // not req.params.id; passed by user in URL /:id
  console.log("ID received in GET /:id:", id);

  // 404 error if pet not found
  if (!mongoose.isValidObjectId(id)) {
    // !mongoose.Types.ObjectId.isValid(id)
    return res
      .status(404)
      .json({ success: false, message: "No pet with that id." });
  }

  try {
    const pet = await Pet.findById(id);
    if (!pet) {
      return res
        .status(404)
        .json({ success: false, message: "Pet not found." });
    }
    res.status(200).json({ success: true, data: pet });
  } catch (error) {
    console.log("Error in Fetching Pet: ", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}; // fetching a pet by id

// POST: CREATE a new pet, /pets
export const createPet = async (req, res) => {
  const pet = req.body; // user will send this data

  // check if all fields are provided
  if (
    !pet.petName ||
    !pet.petType ||
    !pet.petBreed ||
    !pet.petAge ||
    !pet.petColor ||
    !pet.petGender ||
    !pet.petLocation ||
    !pet.humanName ||
    !pet.humanEmail ||
    !pet.humanPhone
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Pet name, type, breed, age, color, gender, location and Human name, email and phone number are required.",
    });
  }

  // create a new pet from user sent data
  const newPet = new Pet(pet); // schema Pet housing user data for pet
  try {
    await newPet.save(); // saving to db w _id
    console.log("New Pet ID from MongoDB: ", newPet._id);
    res.status(201).json({ success: true, data: newPet });
  } catch (error) {
    console.log("Error in Saving Pet: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}; // creating a pet

// PUT: UPDATE a pet by id, /pets/:id
export const updatePet = async (req, res) => {
  const { id } = req.params; // passed id from url via :id
  const pet = req.body;

  // 404 error if pet not found
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "No pet with that id." });
  }

  try {
    const updatedPet = await Pet.findByIdAndUpdate(id, pet, { new: true });
    res.status(200).json({ success: true, data: updatedPet });
  } catch (error) {
    console.log("Error in Updating Pet: ", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
}; // updating a pet

// DELETE: DELETE a pet by id by destructuring id from req.params, /pets/:id
export const deletePet = async (req, res) => {
  const { id } = req.params;
  console.log("Deleting Pet with ID: ", id);

  // 404 error if pet not found
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "No pet with that id." });
  }

  try {
    await Pet.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Pet Deleted Successfully." });
  } catch (error) {
    console.log("Error in Deleting Pet: ", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
}; // deleting a pet
