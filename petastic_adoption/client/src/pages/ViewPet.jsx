import React, { useState, useEffect } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid2,
  IconButton,
  Paper,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import puppy from "../assets/images/puppy.jpg";
import "../App.css";
import "../index.css";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import FavoritesIcon from "../components/FavoritesIcon";
import BrownPrints from "../components/BrownPrints";
import HumanContact from "../components/HumanContact";
import { FaPaw, FaRegHeart } from "react-icons/fa";
import InternalHeaderLogo from "../components/InternalHeaderLogo";
import { BiSolidError } from "react-icons/bi";

// ViewPet component to display recently added pet details
const ViewPet = () => {
  const { id } = useParams(); // matching route definition as a String type
  const [petData, setPetData] = useState(null); //single pet object data; NOT list
  const navigate = useNavigate();

  // ** Implementing Snackbar + Dialog which is an alert for when clicking on the Adopt Me button, stating that it will remove the pet from the list **

  const [snackOpen, setSnackOpen] = useState(false); // Snackbar Alert visibility
  const [dialogOpen, setDialogOpen] = useState(false); // Dialog Confirmation visibility

  // Closing Snackbar Alert
  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };

  // Clicking on "Adopt Me" button triggers Confirmation Dialog Boxes which appears after clicking on AdoptMe: Open/Close
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  // Handle the Agree button inside the Adoption Confirmation dialog to remove individual pet from pets list + success alert
  const handleAdoptMeAgree = () => {
    // Remove the pet from browser's localStorage so doesn't appear on reload/list
    localStorage.removeItem(`pet-${petData.id}`);
    console.log(`REMOVAL: Adopting pet with ID: ${id}`);

    // Open the Snackbar Alert
    setSnackOpen(true);
    console.log("Snackbar opened.");

    // Close the dialog Confirmation
    setDialogOpen(false);

    // Navigate to the /pets page after a short delay to allow Snackbar to show
    setTimeout(() => {
      navigate("/pets");
      console.log("Navigated to /pets.");
    }, 4000); // 4-second delay; matches Snackbar autoHideDuration
  };

  // Clicking on disagree during Adoption Confirmation Dialog: closes the dialog and returns to /pets page
  const handleAdoptMeDisagree = () => {
    setDialogOpen(false); // Close the dialog confirmation
    console.log("Adoption canceled.");

    // Return without removing the pet
    navigate("/pets");
    console.log("Navigated to /pets.");
  };
  // ** End of Adoption Confirmation Dialog + Snackbar Alerts **

  // Load pet data from local storage; data fetching via useEffect, then setPetData
  useEffect(() => {
    console.log(`Fetching pet data for ID: ${id}`); // check if exists
    // Retrieve pet data from local storage; *same pattern from AddPet.jsx
    const storedPet = localStorage.getItem(`pet-${id}`);

    if (storedPet) {
      try {
        // Parse the stored pet data to JSON obj since it's stored as a string
        const parsedPetData = JSON.parse(storedPet);

        console.log("Pet data found in local storage:", parsedPetData);
        setPetData(parsedPetData); // updates from retrieved pet data
      } catch (error) {
        console.error("Error parsing stored pet data:", error);
        // navigate("/pets");
      }
    } else {
      console.log(`No pet data found in local storage for ID: ${id}`);
    }
  }, [id]);

  // Show a loading message if pet data is not available
  if (!petData) {
    return (
      <div>
        <NavBar />
        <div style={{ position: "absolute", left: "85%" }}>
          <RouterLink to="/">
            <img
              className="login-header"
              src={Small_Circular_Logo_Petastic180title}
              alt="Petastic Logo"
            />
          </RouterLink>
        </div>

        <Container className="login-background" maxWidth="sm" sx={{ pt: 29 }}>
          <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
            <Avatar
              className="avatar"
              sx={{
                mx: "auto",
                bgcolor: "#ad9f7a",
                textAlign: "center",
                mb: 1,
                fontWeight: 700,
                fontSize: 30,
                padding: 0.2,
              }}
            >
              <BiSolidError />
            </Avatar>

            <Typography
              component="h1"
              variant="h5"
              sx={{
                textAlign: "center",
                color: "#635b46",
                fontWeight: "bold",
                fontFamily: "espiritu",
                justifyContent: "center",
                mb: 2,
              }}
              alignContent={"center"}
            >
              Oops..
            </Typography>

            <Stack spacing={1} direction="row" justifyContent="center" mt={3}>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  textAlign: "center",
                  // color: "#635b46",
                  color: "#736b59",
                  fontWeight: "bold",
                  fontFamily: "espiritu",
                  padding: 2,
                  fontSize: 18,
                }}
              >
                That pet doesn't exist...it may just have been adopted!!
              </Typography>
            </Stack>
          </Paper>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <InternalHeaderLogo />

      <div style={{ margin: "18%" }}>
        <Card
          sx={{
            maxWidth: "90%", //345,450, 90%
            alignContent: "center",
            borderRadius: 6,
            boxShadow: 10,
            border: 2,
            borderColor: "#c59458",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={petData.image || puppy}
            // image={puppy}
            alt={petData.name}
            sx={{ height: "auto", objectFit: "cover" }}
          />

          <Stack
            direction="row"
            alignItems="center"
            spacing={6}
            backgroundColor="#f6b96e"
            padding={1}
          >
            <Avatar
              sx={{
                bgcolor: "#ad9f7a",
                fontWeight: "bold",
                width: "48px",
                height: "48px",
                right: -10,
                objectFit: "contain",
                boxShadow: 3,
              }}
            >
              <img src={petData.image || puppy}></img>
            </Avatar>

            <Typography
              variant="h5"
              justifyItems="center"
              sx={{
                fontFamily: "espiritu",
                fontWeight: "boldest",
                fontSize: "2em",
              }}
            >
              {petData.name}
            </Typography>
          </Stack>

          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1.2}>
              <Typography
                variant="body1"
                color="#8a3324"
                fontWeight="bold"
                paddingBottom={1.5}
                fontFamily={"espiritu"}
              >
                About Me
              </Typography>
              <BrownPrints sx={{ position: "relative", top: "-10" }} />
            </Stack>

            <Typography
              variant="body2"
              color="#624a2c"
              sx={{ textTransform: "capitalize" }}
              fontFamily={"Montserrat"}
              fontSize={16}
            >
              <Grid2
                container
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                rowSpacing={2}
              >
                <Grid2 size={4}>
                  <Grid2 Item>
                    <strong>Type:</strong> {petData.type}
                  </Grid2>
                  <strong>Breed:</strong> {petData.breed}
                </Grid2>

                <Grid2 size={4}>
                  <Grid2 Item>
                    <strong>Age:</strong> {petData.age}
                  </Grid2>
                  <strong>Color:</strong> {petData.color}
                </Grid2>

                <Grid2 size={4}>
                  <Grid2 Item>
                    <strong>Gender:</strong> {petData.gender}
                  </Grid2>
                  <strong>Size:</strong> {petData.size}
                </Grid2>

                <Grid2 size={4}>
                  <strong>Location:</strong> {petData.location}
                </Grid2>

                <Grid2 size={4}>
                  <strong>Temperament:</strong> {petData.temperament}
                </Grid2>

                <Grid2 size={4}>
                  <strong>Medical History:</strong> {""}
                  {petData.medicalHistory.join(", ")}
                </Grid2>

                <Grid2 size={4}>
                  <Grid2 Item>
                    <strong>Vaccination:</strong> {petData.vaccination}
                  </Grid2>
                  <strong>Spay/Neuter:</strong>{" "}
                  {petData.spayNeuter === "yes" ? (
                    <Checkbox
                      checked={true}
                      color="#ad9f7a"
                      sx={{
                        color: "#ad9f7a",
                        fontSize: 18,
                        marginBottom: 0,
                        marginTop: 0,
                      }} // fontSize: 16,
                      size="xs"
                    />
                  ) : (
                    <RiCheckboxIndeterminateFill
                      color="#880808"
                      sx={{
                        color: "#880808",
                        fontSize: 5,
                        paddingLeft: "3px",
                      }}
                    />
                  )}
                </Grid2>

                <Grid2 size={4}>
                  <strong>Availability:</strong>
                  {petData.availability == "now" ? (
                    <span
                      style={{
                        color: "green",
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        borderRadius: "3px",
                        backgroundColor: "#fbf1d7",
                        paddingRight: "5px",
                        paddingLeft: "5px",
                      }}
                    >
                      {"  "}
                      Now
                    </span>
                  ) : (
                    <span
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontStyle: "italic",
                        borderRadius: "3px",
                        backgroundColor: "#fbf1d7",
                        paddingRight: "5px",
                        paddingLeft: "5px",
                      }}
                    >
                      {"  "}
                      Soon
                    </span>
                  )}
                </Grid2>

                <Grid2 size={4} marginBottom={0}>
                  <Grid2 Item>
                    <strong>OK with Kids:</strong>
                    {petData.okKids === "yes" ? (
                      <Checkbox
                        checked={true}
                        color="#ad9f7a"
                        sx={{
                          color: "#ad9f7a",
                          fontSize: 18,
                          marginBottom: 0,
                          marginTop: 0,
                        }}
                        size="xs"
                      />
                    ) : (
                      <RiCheckboxIndeterminateFill
                        color="#880808"
                        sx={{
                          color: "#880808",
                          fontSize: 5,
                          paddingLeft: 3,
                          paddingRight: 1,
                        }}
                      />
                    )}
                  </Grid2>

                  <Grid2 Item>
                    <strong>OK with Cats:</strong>
                    {petData.okCats === "yes" ? (
                      <Checkbox
                        checked={true}
                        color="#ad9f7a"
                        sx={{
                          color: "#ad9f7a",
                          fontSize: 18,
                          marginBottom: 0,
                          marginTop: 0,
                        }}
                        size="xs"
                      />
                    ) : (
                      <RiCheckboxIndeterminateFill
                        color="#880808"
                        sx={{
                          color: "#880808",
                          fontSize: 5,
                          paddingLeft: 3,
                          paddingRight: 1,
                        }}
                      />
                    )}
                  </Grid2>

                  <Grid2 Item>
                    <strong>OK with Dogs:</strong>
                    {petData.okDogs === "yes" ? (
                      <Checkbox
                        checked={true}
                        color="#ad9f7a"
                        sx={{
                          color: "#ad9f7a",
                          fontSize: 19,
                          marginBottom: 0,
                          marginTop: 0,
                        }}
                        size="xs"
                      />
                    ) : (
                      <RiCheckboxIndeterminateFill
                        color="#880808"
                        sx={{
                          color: "#880808",
                          fontSize: 5,
                          paddingLeft: 3,
                          paddingRight: 1,
                        }}
                      />
                    )}
                  </Grid2>
                </Grid2>

                <Grid2 size={12} textTransform="none">
                  <strong>Description:</strong>{" "}
                  {petData.description ||
                    "Adopting me is the best way to get to know me."}
                </Grid2>
              </Grid2>

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.2}
                paddingTop={5}
              >
                <Typography
                  variant="body1"
                  color="#635b46"
                  fontWeight="bold"
                  sx={{ fontSize: 16, color: "#8a3324" }}
                  paddingBottom={1.5}
                  fontFamily={"espiritu"}
                >
                  Human Contact
                </Typography>

                <HumanContact />
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                bgcolor={"#fbe3c5"}
                padding={2}
                borderRadius={2}
              >
                <Grid2
                  container
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  rowSpacing={2}
                  alignContent={"center"}
                  position={"relative"}
                  justifyContent={"center"}
                >
                  <Grid2 size={3}>
                    <Grid2 Item>
                      <strong>Human Name:</strong> {petData.humanName}
                    </Grid2>
                  </Grid2>

                  <Grid2 size={4} mr={1}>
                    <Grid2 Item>
                      <strong>Human Email:</strong> {petData.humanEmail}
                    </Grid2>
                  </Grid2>

                  <Grid2 size={2.5}>
                    <Grid2 Item>
                      <strong>Human Phone:</strong> {petData.humanPhone}
                    </Grid2>
                  </Grid2>
                </Grid2>
              </Stack>
            </Typography>
          </CardContent>

          <CardActionArea>
            <CardActions>
              <Stack
                sx={{
                  position: "relative",
                  left: "5%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                direction="row"
                spacing={10} //8, 23, 32, 18
                alignContent="center"
              >
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to="/pets"
                  sx={{ fontFamily: "espiritu", fontWeight: "boldest" }}
                >
                  Pets
                </Button>

                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to="/"
                  sx={{ fontFamily: "espiritu", fontWeight: "boldest" }}
                >
                  Home
                </Button>

                <Button
                  size="small"
                  color="primary"
                  onClick={handleDialogOpen}
                  sx={{ fontFamily: "espiritu", fontWeight: "boldest" }}
                >
                  Adopt Me
                </Button>

                <IconButton label="add to favorites">
                  <FavoritesIcon />
                </IconButton>
              </Stack>
            </CardActions>
          </CardActionArea>
        </Card>

        {/* Confirmation Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby="adopt-dialog-title"
          aria-describedby="adopt-dialog-description"
          sx={{ fontFamily: "espiritu", fontWeight: "bold", borderRadius: 10 }}
        >
          <DialogTitle
            id="adopt-dialog-title"
            sx={{
              backgroundColor: "#b30000",
              fontFamily: "espiritu",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Confirm Adoption
            <FaPaw style={{ marginLeft: "8px", color: "#FE6B8B" }} />
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: "#fdf1e2" }} dividers>
            <DialogContentText
              id="adopt-dialog-description"
              sx={{
                width: "100%",
                fontSize: 20,
                fontFamily: "espiritu",
                color: "#635b46",
              }}
              pt={2}
            >
              <Typography gutterBottom>
                Are you sure you want to adopt {petData.name}?
              </Typography>
            </DialogContentText>

            <DialogContentText
              id="adopt-dialog-description"
              sx={{
                width: "100%",
                fontSize: 16,
                fontFamily: "Faculty Glyphic",
                fontWeight: "bolder",
                color: "#635b46",
                whiteSpace: "pre-wrap",
              }}
              spacing={2}
              // pt={2}
            >
              Adopting a pet removes it from being available!
              <Typography sx={{ mt: 1 }} gutterBottom>
                This action cannot be undone.
              </Typography>
            </DialogContentText>
          </DialogContent>

          <DialogActions
            sx={{ backgroundColor: "#ffcccc", fontWeight: "bold" }}
          >
            <Button
              onClick={handleAdoptMeDisagree}
              color="primary"
              variant="outlined"
              borderRadius={10}
            >
              Disagree
            </Button>
            <Button
              onClick={handleAdoptMeAgree}
              color="primary"
              autoFocus
              variant="outlined"
              borderRadius={10}
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        {/* Inline Snackbar Implementation Due to Mui Alert Deprecation and CSS Conflict*/}
        <Snackbar
          open={snackOpen}
          autoHideDuration={4000} // match handleAdoptMe's setTimeout
          onClose={handleSnackClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleSnackClose}
            severity="success"
            // variant="filled"
            sx={{
              width: "100%",
              fontSize: 18,
              fontFamily: "espiritu",
              borderRadius: 6,
              border: 8,
              whiteSpace: "pre-wrap",
            }}
          >
            Congratulations on adopting {petData.name}!!
            <Typography sx={{ mt: 1 }} gutterBottom>
              We'll follow up with you.{" "}
            </Typography>
            <Typography sx={{ mt: 1 }} gutterBottom>
              Happy adopting!
            </Typography>
          </Alert>
        </Snackbar>
      </div>

      <footer
        className="footer2"
        style={{
          position: "relative",
          marginBottom: "0%",
          paddingBottom: "0%",
        }}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default ViewPet;
