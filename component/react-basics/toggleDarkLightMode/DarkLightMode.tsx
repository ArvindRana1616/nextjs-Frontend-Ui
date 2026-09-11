"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import "./style.css";

const DarkLightMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Paper
      className={`theme-card ${
        darkMode ? "theme-dark" : "theme-light"
      }`}
      elevation={0}
    >
      {/* Header */}

      <Box className="theme-header">
        <Box className="theme-title-wrapper">

          <Box className="theme-icon">
            {darkMode ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </Box>

          <Box>
            <Typography className="theme-title">
              Dark / Light Mode
            </Typography>

            <Typography className="theme-subtitle">
              Toggle the UI theme using React state.
            </Typography>
          </Box>

        </Box>

        <Box className="theme-badge">
          useState
        </Box>
      </Box>


      {/* Preview */}

      <Box className="theme-preview">

        <Box className="theme-preview-icon">
          {darkMode ? (
            <DarkModeIcon />
          ) : (
            <WbSunnyIcon />
          )}
        </Box>

        <Typography className="theme-preview-title">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>

        <Typography className="theme-preview-text">
          {darkMode
            ? "The interface is currently using dark theme."
            : "The interface is currently using light theme."}
        </Typography>

      </Box>


      {/* Toggle Button */}

      <Button
        variant="contained"
        startIcon={
          darkMode ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )
        }
        onClick={() =>
          setDarkMode((prev) => !prev)
        }
        className="theme-button"
      >
        {darkMode
          ? "Switch to Light"
          : "Switch to Dark"}
      </Button>


      {/* Footer */}

      <Box className="theme-footer">

        <Typography>
          State:{" "}
          <strong>
            {darkMode ? "true" : "false"}
          </strong>
        </Typography>

      </Box>

    </Paper>
  );
};

export default DarkLightMode;