import React, { useState, useEffect } from "react";
import "../App.css";
import "../index.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link as RouterLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { CgPassword } from "react-icons/cg";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid2,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InternalHeaderLogo from "../components/InternalHeaderLogo";

// To receive a link for password reset
const ForgotPassword = () => {
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      lastName: lastName,
      email: email,
    };
    console.log("Forgot Password data: ", credentials);
  };

  return (
    <div>
      <NavBar />

      <InternalHeaderLogo />

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
              fontSize: 31,
            }}
          >
            <CgPassword />
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
            Forgot Password?
          </Typography>

          <Stack spacing={1} direction="row" justifyContent="center" mt={3}>
            <Typography
              component="h5"
              variant="body1"
              sx={{
                color: "#736b59",
                fontWeight: "bold",
                fontFamily: "espiritu",
                padding: 2,
              }}
            >
              Give us your last name and email address. We'll send you a link to
              reset your password.
            </Typography>
          </Stack>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              placeholder="Enter Last Name"
              name="lastName"
              id="lastName"
              value={lastName}
              type="text"
              fullWidth
              required
              autoFocus
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setLastName(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Enter Email Address"
              name="email"
              id="email"
              type="email"
              value={email}
              fullWidth
              required
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <Button
              className="login-button"
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            >
              Retrieve Password
            </Button>
          </Box>

          <Grid2 container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/">
                <TiHomeOutline className="homeIcon" />
              </Link>
            </Grid2>

            <Link component={RouterLink} to="/login">
              Log In
            </Link>
          </Grid2>
        </Paper>
      </Container>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ForgotPassword;
