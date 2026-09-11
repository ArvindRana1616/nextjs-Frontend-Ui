"use client";

import { useMemo, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const calculateSquare = (num: number) => {
    console.log("Calculating square...");

    return num * num;
  };

  const square = useMemo(() => {
    return calculateSquare(number);
  }, [number]);

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useMemo
      </Typography>

      <Typography className="hook-description">
        useMemo is used to memoize a calculated value and avoid
        unnecessary recalculations when dependencies have not changed.
      </Typography>

      <Box className="hook-demo">
        <Typography className="hook-demo-label">
          Number
        </Typography>

        <Typography className="hook-count">
          {number}
        </Typography>

        <Typography
          sx={{
            fontSize: 18,
            fontWeight: 600,
            mb: 3,
          }}
        >
          Square: {square}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Button
            className="hook-btn hook-btn-plus"
            onClick={() => setNumber((prev) => prev + 1)}
          >
            Change Number
          </Button>

          <Button
            className="hook-btn hook-btn-reset"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Re-render: {count}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UseMemoExample;