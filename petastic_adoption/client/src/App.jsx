import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PETASTIC: Animal adoption</h1>
      <p></p>
    </>
  );
}

export default App;
