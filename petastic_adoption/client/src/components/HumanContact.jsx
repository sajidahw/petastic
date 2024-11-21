import React from "react";
import human_contact from "../assets/human_contact.png";
const HumanContact = () => {
  return (
    <div style={{ position: "relative", top: -5, fontWeight: "bold" }}>
      <img src={human_contact} alt="Human Contact" width="30%" />
    </div>
  );
};

export default HumanContact;

// style={{ position: "relative", top: -10 }}
// img width="25%"
