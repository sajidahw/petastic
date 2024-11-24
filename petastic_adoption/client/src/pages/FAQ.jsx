import React from "react";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import "../App.css";
import "../index.css";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link as RouterLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// FAQ page
const FAQ = () => {
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

      <div style={{ margin: "20%" }}>
        <Typography
          variant="body2"
          color="#624a2c"
          sx={{ textTransform: "capitalize" }}
          fontFamily={"Montserrat"}
          fontSize={16}
        >
          <Accordion
            sx={{
              border: 2,
              borderRadius: 10,
              boxShadow: 10,
              borderColor: "#c59458",
              backgroundColor: "#f6b96e",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={{
                backgroundColor: "#f8c78b",
                color: "#624a2c",
                fontFamily: "espiritu",
                fontWeight: "boldest",
              }}
            >
              About Petastic
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              <p>
                <strong>Petastic</strong> is a pet adoption website which
                connects pets to loving humans who want to provide a forever
                home.{" "}
              </p>
              <p>
                We are a non-profit organization that is doing our part in
                providing an opportunity for available pets to leave shelters or
                unadaptable homes.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: 2,
              borderRadius: 10,
              boxShadow: 10,
              borderColor: "#c59458",
              backgroundColor: "#f6b96e",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                backgroundColor: "#f8c78b",
                color: "#624a2c",
                fontFamily: "espiritu",
                fontWeight: "boldest",
              }}
            >
              How to access Pet Health Record?
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              We have categories which publicizes basic medical conditions and
              health information such as a pet's vaccination or spayed status.
            </AccordionDetails>
            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              The pet's human contact information is provided. We encourage you
              to reach out and ask questions to the current provider. You may
              also want to check with a Veterinarian once you've adopted your
              pet.
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: 2,
              borderRadius: 10,
              boxShadow: 10,
              borderColor: "#c59458",
              backgroundColor: "#f6b96e",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                backgroundColor: "#f8c78b",
                color: "#624a2c",
                fontFamily: "espiritu",
                fontWeight: "boldest",
              }}
            >
              What does the "Adopt Me" button do?
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              The "Adopt Me" button inside a pet's profile will remove the pet
              from being shown. Only available pets are listed in the "Pets"
              gallery.
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: 2,
              borderRadius: 10,
              boxShadow: 10,
              borderColor: "#c59458",
              backgroundColor: "#f6b96e",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                backgroundColor: "#f8c78b",
                color: "#624a2c",
                fontFamily: "espiritu",
                fontWeight: "boldest",
              }}
            >
              How are Pets sourced?
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              Anyone can contribute to listing a pet by filling out a form and
              supplying their contact information. If we receive complaints
              about a listing or the human behind it, we will remove it.
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              border: 2,
              borderRadius: 10,
              boxShadow: 10,
              borderColor: "#c59458",
              backgroundColor: "#f6b96e",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
              sx={{
                backgroundColor: "#f8c78b",
                color: "#624a2c",
                fontFamily: "espiritu",
                fontWeight: "boldest",
              }}
            >
              How can I learn more?
            </AccordionSummary>

            <AccordionDetails
              sx={{
                backgroundColor: "#fdf1e2",
                borderRadius: 1,
                textTransform: "initial",
              }}
            >
              The pet's human contact information is provided. We encourage you
              to reach out and ask questions to the current provider.
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
              sx={{ fontWeight: "boldest" }}
            >
              Liability and Agreement
            </AccordionSummary>
            <AccordionDetails>
              Petastic is not directly involved in the adoption process. We
              provide a platform for pet owners to list their pets for adoption.
            </AccordionDetails>

            <AccordionDetails>
              You understand that we do not guarantee the health nor temperament
              of any pet. You agree to release and hold harmless Petastic and
              its agents from any and all liability arising out of the adoption
              of a pet from Petastic. You agree to indemnify and hold harmless
              Petastic and its agents from any and all claims, damages, costs,
              or expenses including attorney fees arising out of the adoption of
              a pet from Petastic.
            </AccordionDetails>

            <AccordionDetails>
              You understand that we do not source pets directly nor do we
              verify the accuracy of such protrayals. We have not vetted the
              pet's owner, their background nor what is known besides what is
              listed on a pet's profile.
            </AccordionDetails>

            <AccordionActions>
              <Button component={RouterLink} to="/">
                Cancel
              </Button>
              <Button component={RouterLink} to="/login">
                Agree
              </Button>
            </AccordionActions>
          </Accordion>
        </Typography>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FAQ;
