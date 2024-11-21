import React from "react";
import human_contact from "../assets/human_contact.png";
const HumanContact = () => {
  return (
    <div style={{ position: "relative", top: -5 }}>
      <img src={human_contact} alt="Human Contact" width="25%" />
    </div>
  );
};

export default HumanContact;

// style={{ position: "relative", top: -10 }}
