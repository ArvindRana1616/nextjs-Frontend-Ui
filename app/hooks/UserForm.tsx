"use client";

import { useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UserForm = () => {
  // UI ke liye
  const [name, setName] = useState("");

  // Input ko directly access karne ke liye
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", emailRef.current?.value);
  };

  const focusEmail = () => {
    emailRef.current?.focus();
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        User Form
      </Typography>

      {/* useState */}
      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* useRef */}
      <TextField
        fullWidth
        label="Email"
        inputRef={emailRef}
        sx={{ mb: 2 }}
      />

      <Button
        type="button"
        variant="outlined"
        onClick={focusEmail}
        sx={{ mr: 2 }}
      >
        Focus Email
      </Button>

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
};

export default UserForm;