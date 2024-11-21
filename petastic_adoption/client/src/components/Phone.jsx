import { React, useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import { Button, FormLabel } from "@mui/material";

const Phone = ({ humanPhone, setHumanPhone }) => {
  // const [humanPhone, setHumanPhone] = useState("");

  // const handleChange = (e) => {
  //   setHumanPhone(e.target.value); // Update the phone number
  // };

  const handleReset = () => {
    setHumanPhone(""); // Reset the phone number to an empty string
  };
  return (
    <div>
      <FormLabel id="human" component="legend" sx={{ fontWeight: "bold" }}>
        Human's Phone Number:
      </FormLabel>
      <MuiTelInput
        value={humanPhone}
        name="humanPhone"
        id="humanPhone"
        fullWidth
        required
        defaultCountry="US"
        onChange={(newPhone) => setHumanPhone(newPhone)}
        sx={{ bgcolor: "#fbf1d7", mb: 2 }}
      />

      <Button onClick={handleReset} size="small">
        Reset
      </Button>
    </div>
  );
};

export default Phone;

// sx={{ mr: 10, mb: -5, ml: 2 }}
