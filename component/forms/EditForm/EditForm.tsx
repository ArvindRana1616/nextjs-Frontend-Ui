"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

interface UserForm {
  name: string;
  email: string;
  city: string;
}

const EditForm = () => {
  const [formData, setFormData] = useState<UserForm>({
    name: "Arvind",
    email: "arvind@example.com",
    city: "Delhi",
  });

  const [updated, setUpdated] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setUpdated(false);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setUpdated(true);

    console.log("Updated Data:", formData);
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
        Edit Form
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Edit existing form data and update the values.
      </Typography>

      <Box
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
          Update
        </Button>

        {updated && (
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              background: "#F0FDF4",
              border: "1px solid #BBF7D0",
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                color: "#166534",
              }}
            >
              Data updated successfully!
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EditForm;