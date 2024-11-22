import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
// import { FormControlLabel, Switch } from "@mui/material";

import "./index.css";
import "./App.css";
import axios from "axios";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import AddPet from "./pages/AddPet";
import ViewPet from "./pages/ViewPet";
import Pets from "./pages/Pets";
import FAQ from "./pages/FAQ";

function App() {
  // const [showPage, setShowPage] = useState(false);

  // fetching data from the server
  const fetchLandingPage = async () => {
    const response = await axios.get("http://localhost:8181/");
    console.log(response.data);
  };

  // const fetchPets = async () => {
  //   const response = await axios.get("http://localhost:8181/pets");
  //   console.log(response.data);
  // };

  // activating the fetches
  useEffect(() => {
    fetchLandingPage();
    // fetchPets();
  }, []); // empty array means it will only run once

  // const fetchPets = async () => {
  //   const response = await fetch("http://localhost:8181/api/pets");
  //   const data = await response.json();
  //   console.log(data);
  // };

  // displaying data below
  return (
    <div>
      {/* <section> */}
      <Router>
        {/* <FormControlLabel
          control={
            <Switch
              checked={showPage}
              inputProps={{ "aria-label": "controlled" }}
              defaultChecked
              size="small"
              color="#f8e6b7"
              onChange={(e) => setShowPage(!showPage)}
            />
          }
          label={showPage ? "Register" : "Login"}
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pet" element={<AddPet />} />
          <Route path="/pet/:id" element={<ViewPet />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
      {/* </section> */}
    </div>
  );
}

export default App;
