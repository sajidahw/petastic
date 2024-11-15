import React from "react";
import heart from "../assets/heart.png";
import "../index.css";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p className="bolder">
          © 2024 Petastic, Made with
          <img className="heart" src={heart} alt="heart" />
        </p>
      </footer>
    </div>
  );
};

export default Footer;
