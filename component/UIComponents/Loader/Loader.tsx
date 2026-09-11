"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

import "./style.css";

interface LoaderProps {
  loading?: boolean;
  size?: "small" | "medium" | "large";
  text?: string;
}

const Loader = ({
  loading = true,
  size = "medium",
  text = "Loading...",
}: LoaderProps) => {
  if (!loading) {
    return null;
  }

  const getSize = () => {
    switch (size) {
      case "small":
        return 24;

      case "large":
        return 50;

      default:
        return 36;
    }
  };

  return (
    <Box className="ui-loader">
      <CircularProgress size={getSize()} />

      {text && (
        <Typography className="ui-loader-text">
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;