import React from "react";
import { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@mui/material";
import "../App.css";
import "../index.css";

// This component will allow the user to select Pet's size type

const Size = ({ petSize, setPetSize }) => {
  // const [petSize, setPetSize] = useState("");

  return (
    <FormGroup>
      <FormControl>
        <FormLabel id="size" for="size" sx={{ fontWeight: "bold", pt: 1 }}>
          Size:
        </FormLabel>

        <RadioGroup
          row
          name="size"
          value={petSize}
          onChange={(e) => {
            setPetSize(e.target.value);
          }}
        >
          <FormControlLabel
            value="small"
            control={<Radio />}
            label="Small"
            onChange={(e) => setPetSize(e.target.value)}
            sx={{ color: "#635b46" }}
          />

          <FormControlLabel
            value="medium"
            control={<Radio />}
            label="Medium"
            onChange={(e) => setPetSize(e.target.value)}
            sx={{ color: "#635b46" }}
          />

          <FormControlLabel
            value="large"
            control={<Radio />}
            label="Large"
            onChange={(e) => setPetSize(e.target.value)}
            sx={{ color: "#635b46" }}
          />

          <FormControlLabel
            value="extra-large"
            control={<Radio />}
            label="Extra Large"
            onChange={(e) => setPetSize(e.target.value)}
            sx={{ color: "#635b46" }}
          />

          <Button onClick={() => setPetSize("")} size="small" sx={{ mr: 5 }}>
            Reset
          </Button>
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
};

export default Size;
