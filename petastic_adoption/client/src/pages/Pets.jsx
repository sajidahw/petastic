import React from "react";
import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";
import "../index.css";
import puppy from "../assets/images/puppy.jpg";

const Pets = () => {
  const [pets, setPets] = useState([]);

  return (
    <div>
      Pets
      <h3>Pets</h3>
    </div>
  );
};

export default Pets;
