"use client";

import { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useRef
      </Typography>

      <Typography className="hook-description">
        useRef is used to access DOM elements directly or store a
        value without causing a re-render.
      </Typography>

      <Box className="hook-demo">
        <TextField
          inputRef={inputRef}
          fullWidth
          label="Enter your name"
          placeholder="Type something..."
          sx={{ mb: 2 }}
        />

        <Button
          className="hook-btn hook-btn-plus"
          onClick={handleFocus}
        >
          Focus Input
        </Button>
      </Box>
    </Box>
  );
};

export default UseRefExample;