"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import NumbersIcon from "@mui/icons-material/Numbers";

import "./style.css";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Paper className="counter-card" elevation={0}>

      {/* Header */}

      <Box className="counter-header">

        <Box className="counter-title-wrapper">

          <Box className="counter-icon">
            <NumbersIcon />
          </Box>

          <Box>
            <Typography className="counter-title">
              Counter
            </Typography>

            <Typography className="counter-subtitle">
              Increment, decrement and reset state.
            </Typography>
          </Box>

        </Box>

        <Box className="counter-badge">
          useState
        </Box>

      </Box>


      {/* Counter Value */}

      <Box className="counter-value-wrapper">

        <Typography className="counter-label">
          Current Value
        </Typography>

        <Typography className="counter-value">
          {count}
        </Typography>

      </Box>


      {/* Actions */}

      <Box className="counter-actions">

        <Button
          variant="outlined"
          startIcon={<RemoveIcon />}
          onClick={decrement}
          className="counter-button decrement-button"
        >
          Decrement
        </Button>


        <Button
          variant="outlined"
          startIcon={<RestartAltIcon />}
          onClick={reset}
          className="counter-button reset-button"
        >
          Reset
        </Button>


        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={increment}
          className="counter-button increment-button"
        >
          Increment
        </Button>

      </Box>


      {/* Footer */}

      <Box className="counter-footer">

        <Typography>
          State value: <strong>{count}</strong>
        </Typography>

      </Box>

    </Paper>
  );
};

export default Counter;