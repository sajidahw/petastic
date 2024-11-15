// Home page which is the landing page for the website
import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../App.css";
import "../index.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="header">
        <Header />
      </div>
    
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
