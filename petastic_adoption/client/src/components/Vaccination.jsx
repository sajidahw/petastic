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

const Vaccination = () => {
  const [petVaccination, setPetVaccination] = useState("current");

  return (
    <FormControl>
      <FormLabel id="vaccination" for="vaccination" sx={{ fontWeight: "bold", mt: 1 }}>
        Vaccination:
      </FormLabel>

      <RadioGroup
        row
        name="vaccination"
        defaultValue="current"
        value={petVaccination}
        onChange={(e) => {
          setPetVaccination(e.target.value);
        }}
      >
        <FormControlLabel
          value="current"
          control={<Radio />}
          label="Current"
          onChange={(e) => setPetVaccination(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="pending"
          control={<Radio />}
          label="Pending"
          onChange={(e) => setPetVaccination(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="expired"
          control={<Radio />}
          label="Expired"
          onChange={(e) => setPetVaccination(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <Button
          onClick={() => setPetVaccination("current")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default Vaccination;
