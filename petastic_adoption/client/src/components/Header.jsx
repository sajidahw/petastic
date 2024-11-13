import React from "react";
import Naked_Petastic_logo from "../assets/Naked_Petastic_logo.png";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Naked_Petastic_logo} alt="Petastic Logo" />
    </header>
  );
};

export default Header;
