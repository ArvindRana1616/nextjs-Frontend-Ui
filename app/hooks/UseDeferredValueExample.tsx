"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const UseDeferredValueExample = () => {
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => `Product ${index + 1}`);
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(deferredSearch.toLowerCase())
    );
  }, [items, deferredSearch]);

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useDeferredValue
      </Typography>

      <Typography className="hook-description">
        useDeferredValue lets React delay updating a value that is
        less urgent, keeping the UI responsive during heavy updates.
      </Typography>

      <Box className="hook-demo">
        <TextField
          fullWidth
          label="Search Products"
          placeholder="Type product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Typography
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          Results: {filteredItems.length}
        </Typography>

        <Box
          sx={{
            maxHeight: 180,
            overflowY: "auto",
            textAlign: "left",
          }}
        >
          {filteredItems.slice(0, 10).map((item) => (
            <Typography
              key={item}
              sx={{
                py: 0.5,
                color: "#64748B",
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UseDeferredValueExample;