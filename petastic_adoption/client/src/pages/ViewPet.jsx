import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid2,
  Stack,
  Typography,
  CardActionArea,
  Avatar,
  IconButton,
} from "@mui/material";
import { RiCheckboxIndeterminateFill } from "react-icons/ri";
import puppy from "../assets/images/puppy.jpg";
import "../App.css";
import "../index.css";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useParams, Link as RouterLink } from "react-router-dom";
import FavoritesIcon from "../components/FavoritesIcon";
import BrownPrints from "../components/BrownPrints";
import HumanContact from "../components/HumanContact";

// ViewPet component to display recently added pet details
const ViewPet = () => {
  const { id } = useParams(); // matching route definition as a String type
  const [petData, setPetData] = useState(null);

  // Load pet data from local storage; data fetching via useEffect, then setPetData
  useEffect(() => {
    console.log(`Fetching pet data for ID: ${id}`); // check if exists
    // Retrieve pet data from local storage; *same as AddPet.jsx
    const storedPet = localStorage.getItem(`pet-${id}`);

    if (storedPet) {
      try {
        // Parse the stored pet data to JSON obj since it's stored as a string
        const parsedPetData = JSON.parse(storedPet);

        console.log("Pet data found in local storage:", parsedPetData);

        // Update the state with the retrieved pet data
        setPetData(parsedPetData);
      } catch (error) {
        console.error("Error parsing stored pet data:", error);
      }
    } else {
      console.log(`No pet data found in local storage for ID: ${id}`);
    }
  }, [id]);

  // Show a loading message
  if (!petData) {
    return (
      <div>
        <h2 style={{ color: "white" }}>That pet doesn't exist...</h2>;
        <div>
          <RouterLink to="/">
            <img
              className="login-header"
              src={Small_Circular_Logo_Petastic180title}
              alt="Petastic Logo"
            />
          </RouterLink>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div style={{ position: "absolute", left: "90%" }}>
        <RouterLink to="/">
          <img
            className="login-header"
            src={Small_Circular_Logo_Petastic180title}
            alt="Petastic Logo"
          />
        </RouterLink>
      </div>

      <div style={{ margin: "20%" }}>
        <Card
          sx={{
            maxWidth: "90%", //345,450
            alignContent: "center",
            borderRadius: 6,
            boxShadow: 10,
            border: 2,
            borderColor: "#c59458",
            flexDirection: "column",
            // px: 2,
            // position: "relative",
            // left: 350,
            // top: 110,
          }}
        >
          <CardMedia
            component="img"
            image={petData.image || puppy}
            // image={puppy}
            alt={petData.name}
            sx={{ height: "auto", objectFit: "contain" }}
            // sx={{ height: 360 }} // "auto"; added contain
          />

          <Stack
            direction="row"
            alignItems="center"
            spacing={6} //4
            backgroundColor="#f6b96e"
            padding={1} //0.5, 0.7
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
                // backgroundColor: "#f6b96e",
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
                  {/* <Grid2 Item> */}
                  <strong>Location:</strong> {petData.location}
                  {/* </Grid2> */}
                </Grid2>
                <Grid2 size={4}>
                  <strong>Temperament:</strong> {petData.temperament}
                </Grid2>
                <Grid2 size={4}>
                  {/* <Grid2 Item> */}
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
                      // paddingLeft={1}
                      // paddingRight={1}
                      // size="xs"
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
                        // paddingLeft={1}
                        // paddingRight={1}
                        // size="xs"
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
                // justifyContent="center"
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
                  component={RouterLink}
                  to="/"
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

// replaced "Yes" with Checkbox component
// replaced "No" with RiCheckboxIndeterminateFill component
