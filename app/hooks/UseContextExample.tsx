"use client";

import { createContext, useContext, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const UseContextExample = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeContent />
    </ThemeContext.Provider>
  );
};

const ThemeContent = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return null;
  }

  const { darkMode, toggleTheme } = context;

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useContext
      </Typography>

      <Typography className="hook-description">
        useContext is used to access shared data from a Context
        without passing props through every component.
      </Typography>

      <Box
        className="hook-demo"
        sx={{
          backgroundColor: darkMode ? "#1E293B" : "#F8FAFC",
          color: darkMode ? "#FFFFFF" : "#111827",
          transition: "all 0.3s ease",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            mb: 2,
            color: "inherit",
          }}
        >
          Current Theme: {darkMode ? "Dark" : "Light"}
        </Typography>

        <Button
          className="hook-btn hook-btn-plus"
          onClick={toggleTheme}
        >
          Toggle Theme
        </Button>
      </Box>
    </Box>
  );
};

export default UseContextExample;