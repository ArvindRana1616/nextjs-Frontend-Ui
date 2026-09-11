"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import "./style.css";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
    };

    let isValid = true;

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log({
      name,
      email,
      password,
    });

    alert("Form submitted successfully!");

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Paper className="form-card" elevation={0}>

      {/* Header */}

      <Box className="form-header">

        <Box className="form-title-wrapper">

          <Box className="form-icon">
            <AssignmentTurnedInIcon />
          </Box>

          <Box>
            <Typography className="form-title">
              Form Validation
            </Typography>

            <Typography className="form-subtitle">
              Controlled inputs with basic React validation.
            </Typography>
          </Box>

        </Box>

        <Box className="form-badge">
          useState + onSubmit
        </Box>

      </Box>


      {/* Form */}

      <Box
        component="form"
        onSubmit={handleSubmit}
        className="form-body"
      >

        <TextField
          fullWidth
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
        />

        <TextField
          fullWidth
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          className="form-submit-button"
        >
          Submit Form
        </Button>

      </Box>


      {/* Footer */}

      <Box className="form-footer">

        <Typography>
          Validation:{" "}
          <strong>
            Name • Email • Password
          </strong>
        </Typography>

      </Box>

    </Paper>
  );
};

export default FormValidation;