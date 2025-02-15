// NavBar using a MUI as a component

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link as RouterLink } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";

const NavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nav">
      <Box
        sx={{
          width: "40%",
          bgcolor: "#f6b96e",
          borderRadius: 2,
          boxShadow: 0.8,
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab
            icon={<TiHomeOutline className="homeIcon" />}
            component={RouterLink}
            to="/"
          />

          <Tab label="Log In" component={RouterLink} to="/login" />

          <Tab label="Add a Pet" component={RouterLink} to="/pet" />

          <Tab label="Pets" component={RouterLink} to="/pets" />

          <Tab label="FAQ" component={RouterLink} to="/faq" />
        </Tabs>
      </Box>
    </div>
  );
};

export default NavBar;
