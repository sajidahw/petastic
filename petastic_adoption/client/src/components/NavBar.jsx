// NavBar using a MUI as a component

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const NavBar = () => {
  const [value, setValue] = React.useState(0);

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
          boxShadow: 0.5,
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Log In" />
          <Tab label="Add a Pet" />
          <Tab label="Pets Listings" />
          <Tab label="FAQ" />
        </Tabs>
      </Box>
    </div>
  );
};

export default NavBar;
