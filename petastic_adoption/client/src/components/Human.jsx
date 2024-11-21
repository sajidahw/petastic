import React from "react";
import { useState } from "react";
import {
  Button,
  Grid2,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import "../App.css";
import "../index.css";
import Phone from "./Phone";

const Human = ({
  humanName,
  setHumanName,
  humanEmail,
  setHumanEmail,
  humanPhone,
  setHumanPhone,
}) => {
  return (
    <div>
      <Grid2 container spacing={2} sx={{ pt: 2 }}>
        <FormControl
          sx={{ mt: 2, width: "97%", pb: 2 }}
          component="fieldset"
          variant="standard"
        >
          <FormLabel id="human" component="legend" sx={{ fontWeight: "bold" }}>
            Human's Contact Information:
          </FormLabel>

          <FormGroup
            sx={{
              border: 0.1,
              borderRadius: 2,
              color: "#e68259",
              p: 2,
              boxShadow: 1,

              alignItems: "center",
            }}
          >
            <Grid2 item>
              <FormLabel
                id="human"
                component="legend"
                sx={{ fontWeight: "bold" }}
              >
                Human's Full Name:
              </FormLabel>
              <TextField
                placeholder="Enter Human's Name"
                name="humanName"
                value={humanName}
                id="humanName"
                type="text"
                label="Human's Name"
                required
                fullWidth
                sx={{ bgcolor: "#fbf1d7", mb: 2, width: "100%" }}
                onChange={(e) => setHumanName(e.target.value)}
              ></TextField>
            </Grid2>

            <Grid2 item>
              <FormLabel
                id="human"
                component="legend"
                sx={{ fontWeight: "bold" }}
              >
                Human's Email Address:
              </FormLabel>
              <TextField
                placeholder="Enter Human's Email"
                name="humanEmail"
                value={humanEmail}
                id="humanEmail"
                type="email"
                label="Enter Human's Email"
                fullWidth
                required
                sx={{ bgcolor: "#fbf1d7", mb: 2, width: "100%" }}
                onChange={(e) => setHumanEmail(e.target.value)}
              ></TextField>
            </Grid2>

            <Grid2 item>
              <div className="space">
                <Phone humanPhone={humanPhone} setHumanPhone={setHumanPhone} />
              </div>
            </Grid2>
          </FormGroup>
        </FormControl>
      </Grid2>
    </div>
  );
};

export default Human;
