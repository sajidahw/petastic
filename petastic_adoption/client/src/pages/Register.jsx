import React from "react";
import { useState } from "react";
import { TiHomeOutline } from "react-icons/ti";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InternalHeaderLogo from "../components/InternalHeaderLogo";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  //   FormGroup,
  Grid2,
  Link,
  Paper,
  //   Switch,
  TextField,
  Typography,
} from "@mui/material";
import { IoPersonCircleOutline } from "react-icons/io5";
import "../App.css";
import "../index.css";
import { Link as RouterLink } from "react-router-dom";
import LogIn from "../pages/LogIn";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      terms: terms,
    };
    console.log("Registration data: ", registrationData);
    navigate("/login");
  };

  return (
    <div>
      <NavBar />

      <InternalHeaderLogo />

      <Container className="" maxWidth="sm" sx={{ pt: 29 }}>
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          <Avatar
            className="avatar"
            sx={{
              mx: "auto",
              bgcolor: "#ad9f7a",
              textAlign: "center",
              mb: 1,
              fontSize: 70,
              fontWeight: 700,
            }}
          >
            <IoPersonCircleOutline />
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
            Register an Account
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              placeholder="Enter First Name"
              name="firstName"
              value={firstName}
              id="firstName"
              type="text"
              fullWidth
              required
              autoFocus
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setFirstName(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Enter Last Name"
              name="lastName"
              id="lastName"
              value={lastName}
              type="text"
              fullWidth
              required
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setLastName(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Enter Email Address"
              name="email"
              id="email"
              value={email}
              type="email"
              fullWidth
              required
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Enter Password"
              name="password"
              id="password"
              value={password}
              type="password"
              fullWidth
              required
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <FormControlLabel
              control={<Checkbox value={terms} color="primary" />}
              id="terms"
              onChange={(e) => setTerms(e.target.checked)}
              label="I agree to the terms and conditions. I will be a good human."
            ></FormControlLabel>

            <Button
              className="register-button"
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
          </Box>

          <Grid2 container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/">
                <TiHomeOutline className="homeIcon" />
              </Link>
            </Grid2>

            <Grid2 sx={{ ml: 35 }}>Already registered?</Grid2>
            {/* <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked="LogIn"
                    defaultChecked
                    size="small"
                    color="#f8e6b7"
                   
                  />
                }
                label="Log In"
              /> */}
            {/* <Switch
                defaultChecked
                size="small"
                color="#f8e6b7"
                onChange={(e) => setChecked(e.target.checked)}
                checked={checked}
                inputProps={{ "aria-label": "controlled" }}
              /> */}
            <Link component={RouterLink} to="/login">
              Log In
            </Link>
            {/* </FormGroup> */}
          </Grid2>
        </Paper>
      </Container>

      <footer className="footer2">
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
