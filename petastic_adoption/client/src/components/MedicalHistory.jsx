import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid2,
} from "@mui/material";
import React from "react";

const MedicalHistory = ({ petMedicalHistory, setPetMedicalHistory }) => {
  // const [petMedicalHistory, setPetMedicalHistory] = useState([]);
  const medicalConditions = [
    "Allergies",
    "Arthritis",
    "Bladder/Urinary",
    "Blind",
    "Cancer",
    "Deaf",
    "Dental Disease",
    "Diabetes",
    "Ear Infection",
    "IBD",
    "Kidney Disease",
    "None",
  ];

  const handleChange = (e) => {
    if (e.target.checked) {
      setPetMedicalHistory([...petMedicalHistory, e.target.value]);
    } else {
      setPetMedicalHistory(
        petMedicalHistory.filter((item) => item !== e.target.value)
      );
    }
  };

  const handleReset = () => {
    setPetMedicalHistory([]); // Reset all checkboxes to unchecked
  };

  return (
    <div>
      <Grid2 container spacing={2}>
        <FormControl
          sx={{ pt: 1 }}
          component="fieldset"
          variant="standard"
          required
        >
          <FormLabel
            id="medical-history"
            component="legend"
            sx={{ fontWeight: "bold" }}
          >
            Select Pet Medical Conditions:
          </FormLabel>

          <FormGroup row>
            {medicalConditions.map((condition) => (
              <FormControlLabel
                key={condition}
                control={
                  <Checkbox
                    value={condition}
                    checked={petMedicalHistory.includes(condition)}
                    onChange={handleChange}
                    color="#fbf1d7"
                  />
                }
                label={condition}
              />
            ))}

            <Button
              type="button"
              onClick={handleReset}
              size="small"
              sx={{ mr: 10 }}
            >
              Reset
            </Button>
          </FormGroup>
        </FormControl>
      </Grid2>
    </div>
  );
};

export default MedicalHistory;
