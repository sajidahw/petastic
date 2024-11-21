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

const OkDogs = () => {
  const [petOkWithDogs, setPetOkWithDogs] = useState("yes");

  return (
    <FormControl>
      <FormLabel id="okDogs" for="okDogs" sx={{ fontWeight: "bold", pt: 1 }}>
        OK with Dogs?
      </FormLabel>

      <RadioGroup
        row
        defaultValue="yes"
        name="okDogs"
        value={petOkWithDogs}
        onChange={(e) => {
          setPetOkWithDogs(e.target.value);
        }}
      >
        <FormControlLabel
          value="yes"
          control={<Radio />}
          label="Yes"
          onChange={(e) => setPetOkWithDogs(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No"
          onChange={(e) => setPetOkWithDogs(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <Button
          onClick={() => setPetOkWithDogs("yes")}
          size="small"
          sx={{ mr: 10 }}
        >
          Reset
        </Button>
      </RadioGroup>
    </FormControl>
  );
};

export default OkDogs;
