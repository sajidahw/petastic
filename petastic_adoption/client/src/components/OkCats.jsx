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

const OkCats = () => {
  const [petOkWithCats, setPetOkWithCats] = useState("yes");

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
          onChange={(e) => setPetOkWithCats(e.target.value)}
          sx={{ color: "#635b46" }}
        />

        <FormControlLabel
          value="no"
          control={<Radio />}
          label="No"
          onChange={(e) => setPetOkWithCats(e.target.value)}
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
