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

// Plugs in the ViewPet page to see the rendering of radio button responses for "OK with Cats"
const OkCats = ({ petOkWithCats, setPetOkWithCats }) => {
  return (
    <FormControl>
      <FormLabel id="okCats" for="okCats" sx={{ fontWeight: "bold", pt: 1 }}>
        OK with Cats?
      </FormLabel>

      <RadioGroup
        row
        defaultValue="yes"
        name="okCats"
        value={petOkWithCats}
        onChange={(e) => {
          setPetOkWithCats(e.target.value);
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
          onClick={() => setPetOkWithCats("yes")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default OkCats;
