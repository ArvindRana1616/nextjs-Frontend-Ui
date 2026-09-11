"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
}

const MultipleFieldsForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
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
        Multiple Fields Form
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Manage multiple form fields using a single state object.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "fit-content",
            textTransform: "none",
            fontWeight: 700,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default MultipleFieldsForm;