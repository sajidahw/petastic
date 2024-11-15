import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
import AFont_Naked_Petastic_logo from "./assets/AFont_Naked_Petastic_logo.png";
import "./App.css";
import axios from "axios";
// import { createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";

function App() {
  // const [count, setCount] = useState(0);

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
      <section>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />

            {/* <Route path="/pet" element={<AddPet />} />
                <Route path="/pets" element={<PetListings />} />
                <Route path="/pet/:id" element={<ViewPet />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
          </Routes>
        </Router>
      </section>
    </div>
  );
}

export default App;
