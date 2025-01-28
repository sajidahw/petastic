import mongoose from "mongoose";
// creating schema for pets collection UPDATE THIS

const typeOptions = ["dog", "cat", "bird", "fish", "other"];

const locationOptions = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas",
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new hampshire",
  "new jersey",
  "new mexico",
  "new york",
  "north carolina",
  "north dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming",
];

// field names must match the form field names in the client
const petSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    petType: {
      type: String,
      enum: typeOptions,
      required: true,
    },
    petBreed: {
      type: String,
      required: true,
    },
    petAge: {
      type: Number,
      required: true,
      min: 0,
      max: 20,
    },
    petColor: {
      type: String,
      required: true,
    },
    petGender: {
      type: String,
      required: true,
      enum: ["male", "female"],
      default: "male",
    },
    petSize: {
      type: String,
      enum: ["small", "medium", "large", "extra-large"],
    },
    petTemperament: {
      type: String,
      default: "Neutral",
      enum: ["Difficult", "Assertive", "Neutral", "Satisfied", "Enthusiastic"],
    },
    petLocation: {
      type: String,
      required: true,
      enum: locationOptions,
    },
    petMedicalHistory: {
      type: [String],
      default: ["None"],
    },
    petDescription: {
      type: String,
      default: "Adopting me is the best way to get to know me.",
    },
    petAvailability: {
      type: String,
      default: "now",
      enum: ["now", "soon"],
    },
    petVaccination: {
      type: String,
      default: "current",
      enum: ["current", "pending", "expired"],
    },
    petSpayNeuter: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
    },
    petOkKids: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
    },
    petOkCats: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
    },
    petOkDogs: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
    },
    petImage: {
      // data: Buffer,
      contentType: String,
      default: "./client/public/puppy.jpg",

      type: String,
    },
    humanName: {
      type: String,
      required: true,
    },
    humanEmail: {
      type: String,
      required: true,
    },
    humanPhone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // provides a createdAt and updatedAt field
);

// creating model for pets collection
const Pet = mongoose.model("Pet", petSchema); // collection, schema used
// mongodb will translate Pet (singular, capitalized) to pets (plural, lowercase)
export default Pet;
