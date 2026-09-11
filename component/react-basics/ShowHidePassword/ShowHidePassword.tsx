"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";

import "./style.css";

const ShowHidePassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Paper className="password-card" elevation={0}>

      {/* Header */}

      <Box className="password-header">

        <Box className="password-title-wrapper">

          <Box className="password-icon">
            <LockIcon />
          </Box>

          <Box>
            <Typography className="password-title">
              Show / Hide Password
            </Typography>

            <Typography className="password-subtitle">
              Toggle password visibility using React state.
            </Typography>
          </Box>

        </Box>

        <Box className="password-badge">
          useState
        </Box>

      </Box>


      {/* Password Input */}

      <TextField
        fullWidth
        label="Password"
        placeholder="Enter your password"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password-input"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  edge="end"
                >
                  {showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />


      {/* Status */}

      <Box className="password-status">

        <Typography>
          Password is currently{" "}
          <strong>
            {showPassword ? "Visible" : "Hidden"}
          </strong>
        </Typography>

      </Box>


      {/* Toggle Button */}

      <Button
        variant="contained"
        onClick={() =>
          setShowPassword((prev) => !prev)
        }
        className="password-button"
      >
        {showPassword
          ? "Hide Password"
          : "Show Password"}
      </Button>


      {/* Footer */}

      <Box className="password-footer">

        <Typography>
          State:{" "}
          <strong>
            {showPassword ? "true" : "false"}
          </strong>
        </Typography>

      </Box>

    </Paper>
  );
};

export default ShowHidePassword;