"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import "./style.css";

const users = [
  {
    id: 1,
    name: "Arvind Rana",
    email: "arvind@gmail.com",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    role: "React Developer",
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit@gmail.com",
    role: "UI Developer",
  },
];

const FindExample = () => {
  const [email, setEmail] = useState("");

  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase()
  );

  return (
    <Box className="find-card">
      {/* Header */}

      <Box className="find-header">
        <Box className="find-title-wrapper">
          <Box className="find-icon">
            <SearchIcon />
          </Box>

          <Box>
            <Typography className="find-title">
              find() Example
            </Typography>

            <Typography className="find-subtitle">
              Find a user from an array using email.
            </Typography>
          </Box>
        </Box>

        <Box className="find-badge">
          Array Method
        </Box>
      </Box>

      {/* Input */}

      <TextField
        fullWidth
        label="User Email"
        placeholder=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="find-input"
      />

      {/* Result */}

      {email && user && (
        <Card className="find-user-card" elevation={0}>
          <CardContent>
            <Box className="find-user-header">
              <Box className="find-user-avatar">
                <PersonIcon />
              </Box>

              <Box>
                <Typography className="find-user-name">
                  {user.name}
                </Typography>

                <Typography className="find-user-role">
                  {user.role}
                </Typography>
              </Box>
            </Box>

            <Typography className="find-user-email">
              {user.email}
            </Typography>
          </CardContent>
        </Card>
      )}

      {email && !user && (
        <Box className="find-not-found">
          <Typography>
            User not found
          </Typography>
        </Box>
      )}

      {!email && (
        <Box className="find-info">
          <Typography>
            Try:
          </Typography>

          <Typography>
            arvind@gmail.com
          </Typography>

          <Typography>
            rahul@gmail.com
          </Typography>

          <Typography>
            amit@gmail.com
          </Typography>
        </Box>
      )}

      {/* Footer */}

      <Box className="find-footer">
        <Typography>
          Method used: <strong>find()</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default FindExample;