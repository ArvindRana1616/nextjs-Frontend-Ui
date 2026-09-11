"use client";

import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const SelectForm = () => {
  const [category, setCategory] = useState("");
  const [submittedCategory, setSubmittedCategory] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSubmittedCategory(category);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        borderRadius: 3,
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 8px 25px rgba(15, 23, 42, 0.06)",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 14px 30px rgba(15, 23, 42, 0.10)",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 800,
          color: "#111827",
          mb: 1,
        }}
      >
        Select / Dropdown Form
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Select a product category using a controlled dropdown.
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="category-label">
          Category
        </InputLabel>

        <Select
          labelId="category-label"
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Electronics">
            Electronics
          </MenuItem>

          <MenuItem value="Clothing">
            Clothing
          </MenuItem>

          <MenuItem value="Books">
            Books
          </MenuItem>

          <MenuItem value="Furniture">
            Furniture
          </MenuItem>
        </Select>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          textTransform: "none",
          fontWeight: 700,
        }}
      >
        Submit
      </Button>

      {submittedCategory && (
        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: 2,
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Selected Category
          </Typography>

          <Typography
            sx={{
              mt: 0.5,
              color: "#2563EB",
              fontWeight: 600,
            }}
          >
            {submittedCategory}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SelectForm;