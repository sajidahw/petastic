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

const Spay = () => {
  const [petSpayNeuter, setPetSpayNeuter] = useState("yes");

  return (
    <FormControl>
      <FormLabel
        id="spayNeuter"
        for="spayNeuter"
        sx={{ fontWeight: "bold", mt: 1 }}
      >
        Spay/Neutered?
      </FormLabel>

      <RadioGroup
        row
        defaultValue="yes"
        name="spayNeuter"
        value={petSpayNeuter}
        onChange={(e) => {
          setPetSpayNeuter(e.target.value);
        }}
      >
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes"
          onChange={(e) => setPetSpayNeuter(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No"
          onChange={(e) => setPetSpayNeuter(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <Button
          onClick={() => setPetSpayNeuter("yes")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default Spay;
