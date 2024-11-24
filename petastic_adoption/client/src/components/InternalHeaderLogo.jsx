import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Small_Circular_Logo_Petastic180title from "../assets/Small_Circular_Logo_Petastic180title.png";

// This is a truncated Header Logo which links to the Home page
const InternalHeaderLogo = () => {
  return (
    <div style={{ position: "absolute", left: "85%" }}>
      <RouterLink to="/">
        <img
          className="login-header"
          src={Small_Circular_Logo_Petastic180title}
        />
      </RouterLink>
    </div>
  );
};

export default InternalHeaderLogo;
