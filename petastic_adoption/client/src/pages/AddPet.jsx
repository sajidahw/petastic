import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Gender from "../components/Gender";
import Size from "../components/Size";
import Temperament from "../components/Temperament";
import { MdOutlinePets } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import MedicalHistory from "../components/MedicalHistory";
import Availability from "../components/Availability";
import Vaccination from "../components/Vaccination";
import Spay from "../components/Spay";
import OkKids from "../components/OkKids";
import OkCats from "../components/OkCats";
import OkDogs from "../components/OkDogs";
import ImageUpload from "../components/ImageUpload";
import Human from "../components/Human";
import InternalHeaderLogo from "../components/InternalHeaderLogo";
// import axios from "axios";
import axios from "../api/axiosConfig.js";
// import { createPet } from "../../../server/controllers/pet.controller.js";

// This page will allow the user to add a pet by filling out a form.
const AddPet = () => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petColor, setPetColor] = useState("");

  const [petGender, setPetGender] = useState("male");
  const [petSize, setPetSize] = useState("");
  const [petTemperament, setPetTemperament] = useState("Neutral");

  const [petLocation, setPetLocation] = useState("");

  const [petMedicalHistory, setPetMedicalHistory] = useState(["None"]);
  const [petDescription, setPetDescription] = useState("");
  const [petAvailability, setPetAvailability] = useState("now");

  const [petVaccination, setPetVaccination] = useState("current");
  const [petSpayNeuter, setPetSpayNeuter] = useState("yes");
  const [petOkWithKids, setPetOkWithKids] = useState("yes");
  const [petOkWithCats, setPetOkWithCats] = useState("yes");
  const [petOkWithDogs, setPetOkWithDogs] = useState("yes");
  const [petImage, setPetImage] = useState(null);

  // human contact info
  const [humanName, setHumanName] = useState("");
  const [humanEmail, setHumanEmail] = useState("");
  const [humanPhone, setHumanPhone] = useState("");

  const [petData, setPetData] = useState([]); // not used as a prop bc it's not passed to another component

  const navigate = useNavigate();
  // const base_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:8181/api"; // instead of process.env.REACT_APP_API_URL; express server port 8181

  // This array will be used to populate the pet type dropdown menu.
  const types = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "fish", label: "Fish" },
    { value: "other", label: "Other" },
  ];

  // This array will be used to populate the pet location dropdown menu.
  const locations = [
    { value: "alabama", label: "Alabama" },
    { value: "alaska", label: "Alaska" },
    { value: "arizona", label: "Arizona" },
    { value: "arkansas", label: "Arkansas" },
    { value: "california", label: "California" },
    { value: "colorado", label: "Colorado" },
    { value: "connecticut", label: "Connecticut" },
    { value: "delaware", label: "Delaware" },
    { value: "florida", label: "Florida" },
    { value: "georgia", label: "Georgia" },
    { value: "hawaii", label: "Hawaii" },
    { value: "idaho", label: "Idaho" },
    { value: "illinois", label: "Illinois" },
    { value: "indiana", label: "Indiana" },
    { value: "iowa", label: "Iowa" },
    { value: "kansas", label: "Kansas" },
    { value: "kentucky", label: "Kentucky" },
    { value: "louisiana", label: "Louisiana" },
    { value: "maine", label: "Maine" },
    { value: "maryland", label: "Maryland" },
    { value: "massachusetts", label: "Massachusetts" },
    { value: "michigan", label: "Michigan" },
    { value: "minnesota", label: "Minnesota" },
    { value: "mississippi", label: "Mississippi" },
    { value: "missouri", label: "Missouri" },
    { value: "montana", label: "Montana" },
    { value: "nebraska", label: "Nebraska" },
    { value: "nevada", label: "Nevada" },
    { value: "new hampshire", label: "New Hampshire" },
    { value: "new jersey", label: "New Jersey" },
    { value: "new mexico", label: "New Mexico" },
    { value: "new york", label: "New York" },
    { value: "north carolina", label: "North Carolina" },
    { value: "north dakota", label: "North Dakota" },
    { value: "ohio", label: "Ohio" },
    { value: "oklahoma", label: "Oklahoma" },
    { value: "oregon", label: "Oregon" },
    { value: "pennsylvania", label: "Pennsylvania" },
    { value: "rhode island", label: "Rhode Island" },
    { value: "south carolina", label: "South Carolina" },
    { value: "south dakota", label: "South Dakota" },
    { value: "tennessee", label: "Tennessee" },
    { value: "texas", label: "Texas" },
    { value: "utah", label: "Utah" },
    { value: "vermont", label: "Vermont" },
    { value: "virginia", label: "Virginia" },
    { value: "washington", label: "Washington" },
    { value: "west virginia", label: "West Virginia" },
    { value: "wisconsin", label: "Wisconsin" },
    { value: "wyoming", label: "Wyoming" },
  ];

  const petData = {
    // id: id, // not needed for axios
    name: petName,
    type: petType,
    breed: petBreed,
    age: petAge,
    color: petColor,
    gender: petGender,
    size: petSize,
    temperament: petTemperament,
    location: petLocation,
    medicalHistory: petMedicalHistory,
    description: petDescription,
    availability: petAvailability,
    vaccination: petVaccination,
    spayNeuter: petSpayNeuter,
    okKids: petOkWithKids,
    okCats: petOkWithCats,
    okDogs: petOkWithDogs,
    image: petImage,
    humanName: humanName,
    humanEmail: humanEmail,
    humanPhone: humanPhone,
  };

  // This useEffect hook will ensure only positive numbers up to 20 are entered for the pet's age. data fetching via useEffect

  useEffect(() => {
    const positiveAge = petAge.replace(/[^0-9]/g, "");
    const ageNumber = Number(positiveAge);

    if (positiveAge === "" || (ageNumber > 0 && ageNumber <= 20)) {
      setPetAge(positiveAge);
    } else if (ageNumber > 20) {
      setPetAge("20");
    }
  }, [petAge]);

  // This function will handle the form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const id = Date.now(); //petId into String type.toString(), to be used as key in localStorage not needed for axios since driven by MongoDB

    // const petData = {
    //   // id: id, // not needed for axios
    //   name: petName,
    //   type: petType,
    //   breed: petBreed,
    //   age: petAge,
    //   color: petColor,
    //   gender: petGender,
    //   size: petSize,
    //   temperament: petTemperament,
    //   location: petLocation,
    //   medicalHistory: petMedicalHistory,
    //   description: petDescription,
    //   availability: petAvailability,
    //   vaccination: petVaccination,
    //   spayNeuter: petSpayNeuter,
    //   okKids: petOkWithKids,
    //   okCats: petOkWithCats,
    //   okDogs: petOkWithDogs,
    //   image: petImage,
    //   humanName: humanName,
    //   humanEmail: humanEmail,
    //   humanPhone: humanPhone,
    // };
    // Local Storage: key must be stored in AddPet.jsx and retrieved from ViewPet.jsx the same way.
    // Debugging: Log the pet data being stored
    // console.log(`Storing pet data under key: pet-${id}`, petData); // not for axios

    // Local Storage: Save pet data to local storage in key:value.toString() pairs
    // localStorage.setItem(`pet-${id}`, JSON.stringify(petData)); // not for axios

    // Navigate to the ViewPet page with the pet ID
    // navigate(`/pet/${id}`);

    // axios version:
    try {
      // POST request to backend to create a new pet with an 'id'
      // const response = await axios.post(`${base_URL}/pet`, petData);
      const response = await axios.post(`/pet`, petData); //petData or createPet(petData)??
      setPetData([...petData, response.data]); // remove spread if saving one?

      // removed `${base_URL}/pets` bc using axiosConfig

      // Response returns the created pet with a MongoDB 'id' field
      const id = response.data._id;

      console.log(`Pet added successfully with id: ${id}`, response.data);
      // }

      // Navigate to the ViewPet page with the pet ID
      //  navigate(`/pet/${id}`);
      navigate(`/pet/${id}`);
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  // resetForm function resets the form fields to empty strings or defaults. For the radio buttons to be cleared, they have their own reset button.
  const resetForm = () => {
    setPetName("");
    setPetType("");
    setPetBreed("");
    setPetAge("");
    setPetColor("");
    setPetGender("male");
    setPetSize("");
    setPetTemperament("Neutral");
    setPetLocation("");
    setPetMedicalHistory(["None"]);
    setPetDescription("");
    setPetAvailability("now");
    setPetVaccination("current");
    setPetSpayNeuter("yes");
    setPetOkWithKids("yes");
    setPetOkWithCats("yes");
    setPetOkWithDogs("yes");
    setPetImage(null);
    setHumanName("");
    setHumanEmail("");
    setHumanPhone("");
  };

  return (
    <div>
      <NavBar />

      <InternalHeaderLogo />

      <Container className="" maxWidth="md" sx={{ pt: 29 }}>
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <FormControl component="fieldset" sx={{ mt: 1 }}>
            <Avatar
              className="avatar"
              sx={{
                mx: "auto",
                bgcolor: "#ad9f7a",
                textAlign: "center",
                mb: 1,
                fontSize: 35,
                fontWeight: 700,
              }}
            >
              <MdOutlinePets />
            </Avatar>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#635b46",
                fontWeight: "bold",
                fontFamily: "espiritu",
              }}
            >
              Add a Pet
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                placeholder="Enter Pet Name"
                name="petName"
                value={petName}
                id="petName"
                type="text"
                fullWidth
                label="Enter Pet Name"
                required
                autoFocus
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetName(e.target.value)}
              ></TextField>

              <TextField
                select
                slotProps={{
                  select: {
                    fontSize: 25,
                    fontWeight: "bold",
                  },
                }}
                label="Enter Pet Type"
                name="petType"
                value={petType.toLowerCase()}
                id="petType"
                type="text"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetType(e.target.value)}
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                placeholder="Enter Pet Breed"
                name="petBreed"
                value={petBreed}
                id="petBreed"
                type="text"
                label="Enter Pet Breed"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetBreed(e.target.value.toLowerCase())}
              ></TextField>

              <TextField
                placeholder="Enter Pet Age"
                name="petAge"
                label="Enter Pet Age"
                value={petAge}
                id="petAge"
                type="number"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetAge(e.target.value)}
              ></TextField>

              <TextField
                placeholder="Enter Pet Color"
                name="petColor"
                value={petColor.toLowerCase()}
                id="petColor"
                type="text"
                label="Enter Pet Color"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetColor(e.target.value)}
              ></TextField>

              <div>
                <Gender
                  petGender={petGender.toLowerCase()}
                  setPetGender={setPetGender}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <Size petSize={petSize.toLowerCase()} setPetSize={setPetSize} />
              </div>

              <div className="space">
                <Temperament
                  petTemperament={petTemperament}
                  setPetTemperament={setPetTemperament}
                />
              </div>

              <TextField
                select
                slotProps={{
                  select: {
                    fontSize: 25,
                    fontWeight: "bold",
                  },
                }}
                label="Enter Location"
                name="petLocation"
                value={petLocation.toLowerCase()}
                id="petLocation"
                type="text"
                variant="outlined"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
                onChange={(e) => setPetLocation(e.target.value)}
              >
                {locations.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <MedicalHistory
                  petMedicalHistory={petMedicalHistory}
                  setPetMedicalHistory={setPetMedicalHistory}
                />
              </div>

              <div>
                <FormLabel
                  component="legend"
                  sx={{ fontWeight: "bold", pt: 2 }}
                >
                  Tell us about your pet:
                </FormLabel>
                <TextField
                  placeholder="What makes your pet special?"
                  label="Enter Pet Description"
                  name="petDescription"
                  value={petDescription}
                  id="petDescription"
                  type="text"
                  // rows={2}
                  multiline
                  fullWidth
                  required
                  sx={{ bgcolor: "#fbf1d7", mb: 2, mt: 1 }}
                  onChange={(e) => setPetDescription(e.target.value)}
                ></TextField>
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <Availability
                  petAvailability={petAvailability}
                  setPetAvailability={setPetAvailability}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <Vaccination
                  petVaccination={petVaccination}
                  setPetVaccination={setPetVaccination}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <Spay
                  petSpayNeuter={petSpayNeuter}
                  setPetSpayNeuter={setPetSpayNeuter}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <OkKids
                  petOkWithKids={petOkWithKids}
                  setPetOkWithKids={setPetOkWithKids}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <OkCats
                  petOkWithCats={petOkWithCats}
                  setPetOkWithCats={setPetOkWithCats}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <OkDogs
                  petOkWithDogs={petOkWithDogs}
                  setPetOkWithDogs={setPetOkWithDogs}
                />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <ImageUpload petImage={petImage} setPetImage={setPetImage} />
              </div>

              <div className="space">
                {/* Pass the state and setter functions as props */}
                <Human
                  humanName={humanName}
                  setHumanName={setHumanName}
                  humanEmail={humanEmail}
                  setHumanEmail={setHumanEmail}
                  humanPhone={humanPhone}
                  setHumanPhone={setHumanPhone}
                />
              </div>

              <Button
                className="submitPet-button"
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>

              <Button
                className="resetPet-button"
                size="small"
                type="reset"
                fullWidth
                variant="contained"
                onClick={() => {
                  resetForm();
                }}
              >
                Reset
              </Button>
            </Box>
          </FormControl>
        </Paper>
      </Container>

      <footer className="footer2">
        <Footer />
      </footer>
    </div>
  );
};

export default AddPet;
