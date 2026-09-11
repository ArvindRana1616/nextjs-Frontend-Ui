"use client";

import { useCallback, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleMessage = useCallback(() => {
    setMessage("Button function executed!");
  }, []);

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useCallback
      </Typography>

      <Typography className="hook-description">
        useCallback is used to memoize a function and prevent a new
        function from being created on every render.
      </Typography>

      <Box className="hook-demo">
        <Typography className="hook-demo-label">
          Counter
        </Typography>

        <Typography className="hook-count">
          {count}
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
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increase
          </Button>

          <Button
            className="hook-btn hook-btn-reset"
            onClick={handleMessage}
          >
            Run Function
          </Button>
        </Box>

        {message && (
          <Typography
            sx={{
              mt: 2,
              color: "#16A34A",
              fontWeight: 600,
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default UseCallbackExample;