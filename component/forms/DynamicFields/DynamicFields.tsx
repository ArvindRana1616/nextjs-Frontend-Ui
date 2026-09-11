"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const DynamicFields = () => {
  const [skills, setSkills] = useState<string[]>([""]);
  const [submittedSkills, setSubmittedSkills] = useState<string[]>([]);

  const addSkill = () => {
    setSkills((prev) => [...prev, ""]);
  };

  const removeSkill = (index: number) => {
    setSkills((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const handleChange = (
    index: number,
    value: string
  ) => {
    setSkills((prev) =>
      prev.map((skill, i) =>
        i === index ? value : skill
      )
    );
  };

  const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const validSkills = skills.filter(
    (skill) => skill.trim() !== ""
  );

  setSubmittedSkills(validSkills);
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
        Dynamic Fields
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Add or remove form fields dynamically.
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              label={`Skill ${index + 1}`}
              value={skill}
              onChange={(e) =>
                handleChange(index, e.target.value)
              }
            />

            <IconButton
              color="error"
              onClick={() => removeSkill(index)}
              disabled={skills.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Button
            type="button"
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={addSkill}
            sx={{
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Add Skill
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Submit
          </Button>
          
        </Box>
        <div>

          {submittedSkills.length > 0 && (
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
                    mb: 1.5,
                }}
                >
                Submitted Skills
                </Typography>

                {submittedSkills.map((skill, index) => (
                <Typography
                    key={index}
                    sx={{
                    fontSize: 14,
                    color: "#475569",
                    mb: 0.5,
                    }}
                >
                    {index + 1}. {skill}
                </Typography>
                ))}
            </Box>
        )}
        </div>
      </Box>
    </Box>
  );
};

export default DynamicFields;