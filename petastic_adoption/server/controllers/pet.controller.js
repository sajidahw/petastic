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

// GET: Fetch a pet by id, /pet/:id
export const getPetById = async (req, res) => {
  const { id } = req.params; // not req.params.id; passed by user in URL /:id
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

// POST: CREATE a new pet, /pet
export const createPet = async (req, res) => {
  // const pet = req.body; // user will send this data
  const {
    petName,
    petType,
    petBreed,
    petAge,
    petColor,
    petGender,
    petSize,
    petTemperament,
    petLocation,
    petMedicalHistory,
    petDescription,
    petAvailability,
    petVaccination,
    petSpayNeuter,
    petOkWithKids,
    petOkWithCats,
    petOkWithDogs,
    petImage,
    humanName,
    humanEmail,
    humanPhone,
  } = req.body; // petData from user

  // check if all fields are provided
  if (
    !petName ||
    !petType ||
    !petBreed ||
    !petAge ||
    !petColor ||
    !petGender ||
    !petLocation ||
    !humanName ||
    !humanEmail ||
    !humanPhone
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Missing required fields: Pet name, type, breed, age, color, gender, location and Human name, email and phone number are required.",
    });
  }

  // create a new pet from user sent data
  const newPet = new Pet({
    petName,
    petType,
    petBreed,
    petAge,
    petColor,
    petGender,
    petSize,
    petTemperament,
    petLocation,
    petMedicalHistory,
    petDescription,
    petAvailability,
    petVaccination,
    petSpayNeuter,
    petOkWithKids,
    petOkWithCats,
    petOkWithDogs,
    petImage,
    humanName,
    humanEmail,
    humanPhone,
  }); // schema Pet housing user data for pet

  try {
    const savedPet = await newPet.save(); // saving to db w _id
    console.log("New Pet ID from MongoDB: ", savedPet._id);
    res.status(201).json({ success: true, data: savedPet });
  } catch (error) {
    console.log("Error in Saving Pet: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}; // creating a pet

// PUT: UPDATE a pet by id, /pet/:id
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

// DELETE: DELETE a pet by id by destructuring id from req.params, /pet/:id
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
      .json({ success: true, message: "Pet adopted Successfully." });
  } catch (error) {
    console.log("Error in Deleting Pet: ", error.message);
    res.status(500).json({ success: false, message: "Server error." });
  }
}; // deleting a pet
