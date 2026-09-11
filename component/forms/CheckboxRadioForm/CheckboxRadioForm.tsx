"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

const CheckboxRadioForm = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [experience, setExperience] = useState("");
  const [submittedData, setSubmittedData] = useState<{
  skills: string[];
  experience: string;
} | null>(null);

  const handleSkillChange = (
    skill: string,
    checked: boolean
  ) => {
    if (checked) {
      setSkills((prev) => [...prev, skill]);
    } else {
      setSkills((prev) =>
        prev.filter((item) => item !== skill)
      );
    }
  };

  const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setSubmittedData({
    skills,
    experience,
  });
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
        Checkbox & Radio Form
      </Typography>

      <Typography
        sx={{
          color: "#64748B",
          fontSize: 14,
          mb: 3,
        }}
      >
        Manage multiple selections and single-choice
        options using React state.
      </Typography>

      {/* Checkbox */}

      <FormLabel>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#334155",
            mb: 1,
          }}
        >
          Select Skills
        </Typography>
      </FormLabel>

      <FormGroup>
        {["React", "TypeScript", "Next.js", "JavaScript"].map(
          (skill) => (
            <FormControlLabel
              key={skill}
              control={
                <Checkbox
                  checked={skills.includes(skill)}
                  onChange={(e) =>
                    handleSkillChange(
                      skill,
                      e.target.checked
                    )
                  }
                />
              }
              label={skill}
            />
          )
        )}
      </FormGroup>

      {/* Radio */}

      <Box sx={{ mt: 3 }}>
        <FormLabel>
          <Typography
            sx={{
              fontWeight: 700,
              color: "#334155",
              mb: 1,
            }}
          >
            Experience
          </Typography>
        </FormLabel>

        <RadioGroup
          value={experience}
          onChange={(e) =>
            setExperience(e.target.value)
          }
        >
          <FormControlLabel
            value="Fresher"
            control={<Radio />}
            label="Fresher"
          />

          <FormControlLabel
            value="1-3 Years"
            control={<Radio />}
            label="1-3 Years"
          />

          <FormControlLabel
            value="3-5 Years"
            control={<Radio />}
            label="3-5 Years"
          />

          <FormControlLabel
            value="5+ Years"
            control={<Radio />}
            label="5+ Years"
          />
        </RadioGroup>
      </Box>

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

      {submittedData && (
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
        fontWeight: 800,
        color: "#111827",
        mb: 1.5,
      }}
    >
      Submitted Data
    </Typography>

    <Typography
      sx={{
        fontSize: 14,
        color: "#475569",
        mb: 1,
      }}
    >
      <strong>Skills:</strong>{" "}
      {submittedData.skills.length > 0
        ? submittedData.skills.join(", ")
        : "No skill selected"}
    </Typography>

    <Typography
      sx={{
        fontSize: 14,
        color: "#475569",
      }}
    >
      <strong>Experience:</strong>{" "}
      {submittedData.experience || "Not selected"}
    </Typography>
  </Box>
)}
    </Box>
  );
};

export default CheckboxRadioForm;