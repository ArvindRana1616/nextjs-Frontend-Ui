"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import { useCounter } from "./useCounter";

const CustomHookExample = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        Custom Hook
      </Typography>

      <Typography className="hook-description">
        A Custom Hook is a reusable function that contains React Hook
        logic and can be shared between components.
      </Typography>

      <Box className="hook-demo">
        <Typography className="hook-demo-label">
          useCounter Example
        </Typography>

        <Typography className="hook-count">
          {count}
        </Typography>

        <Stack sx={{
          flexDirection:"row",
          gap:"15px",
          justifyContent:"center"}}
        >
          <Button
            className="hook-btn hook-btn-minus"
            onClick={decrement}
          >
            −
          </Button>

          <Button
            className="hook-btn hook-btn-reset"
            onClick={reset}
          >
            Reset
          </Button>

          <Button
            className="hook-btn hook-btn-plus"
            onClick={increment}
          >
            +
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomHookExample;