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

const Availability = ({ petAvailability, setPetAvailability }) => {

  return (
    <FormControl>
      <FormLabel
        id="availability"
        for="availability"
        sx={{ fontWeight: "bold" }}
      >
        Availability:
      </FormLabel>

      <RadioGroup
        row
        name="availability"
        defaultValue="now"
        value={petAvailability}
        onChange={(e) => {
          setPetAvailability(e.target.value);
        }}
      >
        <FormControlLabel
          value="now"
          control={<Radio />}
          label="Now"
          onChange={(e) => setPetAvailability(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="soon"
          control={<Radio />}
          label="Soon"
          onChange={(e) => setPetAvailability(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <Button
          onClick={() => setPetAvailability("now")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default Availability;
