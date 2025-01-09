import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../App.css";
import "../index.css";
import puppy from "../assets/images/puppy.jpg";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";
import { Link as RouterLink } from "react-router-dom";
import BrownPrints from "../components/BrownPrints";
import FavoritesIcon from "../components/FavoritesIcon";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardActionArea, // Entire card clickable
  CardMedia,
  Grid2, // responsive layout
  IconButton,
  Stack,
  Typography,
  Paper,
  Container,
} from "@mui/material";
import { FaPaw } from "react-icons/fa";
import axios from "axios";

// This is the Pets gallery or listings page of Available Pets
const Pets = () => {
  // no props since displaying ALL pets
  const [pets, setPets] = useState([]);

  // // Fetch all pets from the local storage
  // useEffect(() => {
  //   const fetchPets = () => {
  //     const petsList = [];

  //     for (let i = 0; i < localStorage.length; i++) {
  //       const key = localStorage.key(i);
  //       // key pet-: fetching all pets regardless of specific ID
  //       if (key.startsWith("pet-")) {
  //         const pet = JSON.parse(localStorage.getItem(key));
  //         if (pet) {
  //           petsList.push(pet);
  //         }
  //       }
  //     }

  //     setPets(petsList);
  //   };

  //   fetchPets();
  // }, []);

  // Fetch all pets from server database (not local storage) using axios
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/pets`
        );
        // console.log(response.data);
        setPets(response.data.pets);
      } catch (error) {
        console.log("Error in Fetching Pets: ", error.message);
      }
    };

    fetchPets();
  }, []);

  return (
    <div>
      <NavBar />

      <div style={{ position: "absolute", left: "87%", top: "1.5%" }}>
        <RouterLink to="/">
          <img
            className="login-header"
            src={Small_Circular_Logo_Petastic180title}
          />
        </RouterLink>
      </div>

      <Box
        backgroundColor="#624a2c"
        borderRadius={20}
        mt={"15%"}
        height={"auto"}
        width={"75%"}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
        ml={"12%"}
      >
        <Stack direction={"row"} justifyContent={"center"}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "espiritu",
              fontWeight: "boldest",
              color: "white",
              textShadow: "2px 2px 2px #f6b96e",
              justifyContent: "center",
            }}
          >
            <Stack direction={"row"} justifyContent={"center"}>
              Available Pets:
            </Stack>
            Finding Your Furry Match Starts Today!
          </Typography>
        </Stack>
      </Box>

      {/* Container Grid: responsive/adjust layout based on screen size */}
      <Grid2
        container
        spacing={2}
        padding={2}
        justifyContent={"center"}
        display={"flex"}
      >
        {pets.length > 0 ? (
          pets.map((pet) => (
            <Grid2 item xs={12} sm={6} md={4} key={pet.id}>
              {/* maxWidth: 345 */}
              <Card
                sx={{
                  maxWidth: 400,
                  alignContent: "center",
                  borderRadius: 6,
                  boxShadow: 10,
                  border: 2,
                  borderColor: "#c59458",
                  flexDirection: "column",
                }}
              >
                {/* makes the entire card clickable */}
                <CardActionArea
                  component={RouterLink} // Nav Link
                  to={`/pet/${pet.id}`}
                >
                  <CardMedia
                    component="img"
                    // height="auto"
                    loading="lazy"
                    // image={puppy}
                    image={pet.image || puppy}
                    alt={pet.name}
                    sx={{
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 0 10px 0",
                      height: "400px",
                    }}
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
                        boxShadow: 3,
                      }}
                    >
                      <img src={pet.image || puppy}></img>
                    </Avatar>

                    <Typography
                      variant="h5"
                      justifyItems="center"
                      sx={{
                        fontFamily: "espiritu",
                        fontWeight: "boldest",
                        fontSize: "1.4em",
                      }}
                    >
                      {pet.name}
                    </Typography>
                  </Stack>

                  <CardContent>
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
                        rowSpacing={1.5}
                      >
                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Type:</strong>
                          </Grid2>
                          {pet.type}
                        </Grid2>

                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Breed:</strong>
                          </Grid2>
                          {pet.breed}
                        </Grid2>

                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Age:</strong>
                          </Grid2>
                          {pet.age}
                        </Grid2>

                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Color:</strong>
                          </Grid2>
                          {pet.color}
                        </Grid2>

                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Gender:</strong>
                          </Grid2>
                          {pet.gender}
                        </Grid2>

                        <Grid2 size={6}>
                          <Grid2 Item>
                            <strong>Size:</strong>
                          </Grid2>
                          {pet.size}
                        </Grid2>
                      </Grid2>
                    </Typography>

                    <Button
                      component={RouterLink} // Nav Link
                      to={`/pet/${pet.id}`}
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        mt: 1,
                        fontFamily: "espiritu",
                        fontWeight: "boldest",
                        backgroundColor: "#ad9f7a",
                        color: "white",
                        marginLeft: "5%",
                        width: "50%",
                        fontSize: "14px",
                        borderRadius: "20px",
                        marginBottom: "1px",
                        marginTop: "20px",
                      }}
                      startIcon={<FaPaw />}
                    >
                      View Details
                    </Button>

                    <IconButton
                      label="add to favorites"
                      sx={{ left: 24, bottom: -11 }}
                    >
                      <FavoritesIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))
        ) : (
          <div>
            <Grid2 item xs={12} bgcolor="#f6b96e" borderRadius={6} mt={3}>
              <Container
                className="login-background"
                maxWidth="sm"
                sx={{ pt: 2 }}
              >
                <Stack direction={"row"} justifyContent={"center"} p={1}>
                  {/* <BrownPrints /> */}
                  <FaPaw color="#990000" fontSize={62} />
                  <Typography
                    variant="h2"
                    color="#624a2c"
                    sx={{ textTransform: "capitalize" }}
                    fontFamily={"Montserrat"}
                    fontSize={22}
                    fontWeight={"bold"}
                    justifyContent={"center"}
                    paddingBottom={2}
                    padding={3}
                  >
                    Loading...Yelp, all our pets are in happy homes right now.
                    Come back later!
                  </Typography>
                </Stack>
              </Container>
            </Grid2>
          </div>
        )}
      </Grid2>

      <footer className="footer2">
        <Footer />
      </footer>
    </div>
  );
};

export default Pets;
