"use client";

import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const UseStateExample = () => {
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
    <Box className="hook-example">
      <Typography className="hook-name">
        useState
      </Typography>

      <Typography className="hook-description">
        useState is used to create and manage state inside a functional
        component.
      </Typography>

      <Box className="hook-demo">
        <Typography className="hook-demo-label">
          Counter Example
        </Typography>

        <Typography className="hook-count">
          {count}
        </Typography>

        <Stack sx={{
          flexDirection:"row",
          gap:"14px",
          justifyContent:"center"}}
        >
          <Button
            variant="outlined"
            className="hook-btn hook-btn-minus"
            onClick={decrement}
          >
            −
          </Button>

          <Button
            variant="outlined"
            onClick={reset}
             className="hook-btn hook-btn-reset"
          >
            Reset
          </Button>

          <Button
            variant="contained"
            onClick={increment}
            className="hook-btn hook-btn-plus"
          >
            +
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UseStateExample;