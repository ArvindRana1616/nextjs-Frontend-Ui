"use client";

import { useState, useTransition } from "react";
import { Box, Button, Typography } from "@mui/material";

const UseTransitionExample = () => {
  const [items, setItems] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const handleLoadItems = () => {
    startTransition(() => {
      const newItems = Array.from(
        { length: 20000 },
        (_, index) => `Item ${index + 1}`
      );

      setItems(newItems);
    });
  };

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useTransition
      </Typography>

      <Typography className="hook-description">
        useTransition is used to mark a state update as non-urgent so
        the UI can remain responsive during heavy updates.
      </Typography>

      <Box className="hook-demo">
        <Button
          className="hook-btn hook-btn-plus"
          onClick={handleLoadItems}
          disabled={isPending}
        >
          {isPending ? "Loading..." : "Load Items"}
        </Button>

        <Typography sx={{ mt: 2 }}>
          Items: {items.length}
        </Typography>
      </Box>
    </Box>
  );
};

export default UseTransitionExample;