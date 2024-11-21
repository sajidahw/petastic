// Login page for users to login to their account
import React from "react";
import { useState } from "react";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";
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
  TextField,
  Typography,
} from "@mui/material"; // Paper provides indentation shadowing
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import "../App.css";
import "../index.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Header from "../components/Header";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: username,
      password: password,
      remember: remember,
    };
    console.log("Login data: ", credentials);
  };

  return (
    <div>
      <NavBar />

      <div>
        <RouterLink to="/">
          <img
            className="login-header"
            src={Small_Circular_Logo_Petastic180title}
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
            }}
          >
            <LockOutlinedIcon />
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
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              placeholder="Enter Username"
              name="username"
              id="username"
              value={username}
              type="text"
              fullWidth
              required
              autoFocus
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>

            <TextField
              placeholder="Enter Password"
              name="password"
              id="password"
              type="password"
              value={password}
              fullWidth
              required
              sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <FormControlLabel
              control={<Checkbox value={remember} color="primary" />}
              id="remember"
              label="Remember me"
              onChange={(e) => setRemember(e.target.checked)}
            />
            <Button
              className="login-button"
              type="submit"
              fullWidth
              variant="contained"
              // sx={{
              //   mt: 2,
              //   mb: 1,
              //   bgcolor: "#ad9f7a",
              //   color: "#white",
              //   fontWeight: "bold",
              //   borderRadius: 20,
              //   fontSize: 16,
              // }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>

          <Grid2 container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid2 item>
              <Link component={RouterLink} to="/forgot">
                Forgot password?
              </Link>
            </Grid2>

            <Link component={RouterLink} to="/register">
              Register
            </Link>
          </Grid2>
        </Paper>
      </Container>

      <footer className="footer2">
        <Footer />
      </footer>
    </div>
  );
};

export default LogIn;
