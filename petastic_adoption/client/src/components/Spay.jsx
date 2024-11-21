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

// Plugs in the ViewPet page to see the rendering of radio button responses for "Spay/Neutered"
const Spay = ({ petSpayNeuter, setPetSpayNeuter }) => {
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
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No"
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
