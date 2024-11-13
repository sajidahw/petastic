import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Naked_Petastic_logo from "./assets/Naked_Petastic_logo.png";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";

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
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
