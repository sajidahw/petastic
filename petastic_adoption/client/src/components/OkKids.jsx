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

// Plugs in the ViewPet page to see the rendering of radio button responses for "OK with Kids"
const OkKids = ({ petOkWithKids, setPetOkWithKids }) => {
  return (
    <FormControl>
      <FormLabel id="okKids" for="okKids" sx={{ fontWeight: "bold", pt: 1 }}>
        OK with Kids?
      </FormLabel>

      <RadioGroup
        row
        defaultValue="yes"
        name="okKids"
        value={petOkWithKids}
        onChange={(e) => {
          setPetOkWithKids(e.target.value);
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
          onClick={() => setPetOkWithKids("yes")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default OkKids;
