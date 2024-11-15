import React from "react";
import Logo_Font_Naked_Petastic_logo from "../assets/Logo_Font_Naked_Petastic_logo.png";
import "../index.css";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={Logo_Font_Naked_Petastic_logo} alt="Petastic Logo" />

        <br />
      </header>
    </div>
  );
};

export default Header;
