import React from "react";
import { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import "../App.css";
import "../index.css";

// This component will allow the user to select Pet's gender type

// transmitting data over via props from Parent component where it was defined
const Gender = ({ petGender, setPetGender }) => {
  // const [petGender, setPetGender] = useState("male");

  return (
    <FormControl>
      <FormLabel id="gender" for="gender" sx={{ fontWeight: "bold", pt: 1 }}>
        Gender:
      </FormLabel>

      <RadioGroup
        row
        defaultValue="male"
        name="gender"
        value={petGender}
        onChange={(e) => {
          setPetGender(e.target.value);
        }}
      >
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          onChange={(e) => setPetGender(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
          onChange={(e) => setPetGender(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <Button
          onClick={() => setPetGender("male")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default Gender;
