// Login page for users to login to their account
import React from "react";
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

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <div>
      <NavBar />

      <div className="login-background">
        <Container maxWidth="sm" sx={{ pt: 29 }}>
          <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
            <Avatar
              sx={{
                mx: "auto",
                bgcolor: "#ad9f7a",
                textAlign: "center",
                mb: 1,
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ textAlign: "center", color: "#635b46", fontWeight: "bold" }}
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
                type="text"
                fullWidth
                required
                autoFocus
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              ></TextField>

              <TextField
                placeholder="Enter Password"
                type="password"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2 }}
              ></TextField>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 1,
                  bgcolor: "#ad9f7a",
                  color: "#white",
                  fontWeight: "bold",
                  borderRadius: 20,
                  fontSize: 16,
                }}
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

        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default LogIn;
