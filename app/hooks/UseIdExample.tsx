"use client";

import { useId } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const UseIdExample = () => {
  const emailId = useId();

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useId
      </Typography>

      <Typography className="hook-description">
        useId generates a unique ID that can be used to connect
        form fields with their labels and improve accessibility.
      </Typography>

      <Box className="hook-demo">
        <TextField
          fullWidth
          id={emailId}
          label="Email"
          placeholder="Enter your email"
          sx={{ mb: 2 }}
        />

        <Typography
          sx={{
            fontSize: 13,
            color: "#64748B",
            mb: 2,
          }}
        >
          Generated ID: {emailId}
        </Typography>

        <Button
          className="hook-btn hook-btn-plus"
          onClick={() => alert(`Input ID: ${emailId}`)}
        >
          Show ID
        </Button>
      </Box>
    </Box>
  );
};

export default UseIdExample;