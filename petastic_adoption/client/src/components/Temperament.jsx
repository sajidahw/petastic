import { React, useState } from "react";
import PropTypes from "prop-types";
import { Button, FormControl, FormLabel, Grid2, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Tooltip from "@mui/material/Tooltip";
import "../App.css";
import "../index.css";

const Temperament = ({ petTemperament, setPetTemperament }) => {
  const TemperamentRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  const temperamentIcons = {
    1: {
      icon: (
        <Tooltip title="Difficult">
          <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />
        </Tooltip>
      ),
      label: "Difficult",
    },
    2: {
      icon: (
        <Tooltip title="Assertive">
          <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 30 }} />
        </Tooltip>
      ),
      label: "Assertive",
    },
    3: {
      icon: (
        <Tooltip title="Neutral">
          <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 30 }} />
        </Tooltip>
      ),
      label: "Neutral",
    },
    4: {
      icon: (
        <Tooltip title="Satisfied">
          <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 30 }} />
        </Tooltip>
      ),
      label: "Satisfied",
    },
    5: {
      icon: (
        <Tooltip title="Enthusiastic">
          <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 30 }} />
        </Tooltip>
      ),
      label: "Enthusiastic",
    },
  };

  const handleChange = (event, newValue) => {
    const selectedLabel = temperamentIcons[newValue].label;
    setPetTemperament(selectedLabel);
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{temperamentIcons[value].icon}</span>;
  }

  // IconContainer.propTypes = {
  //   value: PropTypes.number.isRequired,
  // };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl>
        <Grid2>
          <Grid2 item>
            <FormLabel
              id="temperament"
              for="temperament"
              sx={{ mt: 0.6, fontWeight: "bold" }}
            >
              Temperament:
            </FormLabel>

            <FormLabel
              sx={{ mt: 0.6, fontWeight: "regular", fontStyle: "italic", p: 2 }}
              id="temperament-description"
              for="temperament-description"
            >
              {petTemperament}
            </FormLabel>
          </Grid2>
        </Grid2>

        <TemperamentRating
          name="tempermant"
          value={Object.keys(temperamentIcons).find(
            (key) => temperamentIcons[key].label === petTemperament
          )}
          onChange={handleChange}
          defaultValue={3}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
        />

        <Button
          onClick={() => setPetTemperament("")}
          size="small"
          sx={{ ml: 50 }}
          row
        >
          Reset
        </Button>
      </FormControl>
    </Stack>
  );
};

export default Temperament;
