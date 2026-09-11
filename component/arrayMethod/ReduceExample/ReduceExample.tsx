"use client";

import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

import CalculateIcon from "@mui/icons-material/Calculate";

import "./style.css";

interface Subject {
  id: number;
  name: string;
  marks: number;
}

const subjects: Subject[] = [
  {
    id: 1,
    name: "JavaScript",
    marks: 80,
  },
  {
    id: 2,
    name: "React",
    marks: 75,
  },
  {
    id: 3,
    name: "TypeScript",
    marks: 90,
  },
  {
    id: 4,
    name: "Next.js",
    marks: 85,
  },
];

const ReduceExample = () => {
  const totalMarks = subjects.reduce(
    (total, subject) => total + subject.marks,
    0
  );

  const averageMarks = totalMarks / subjects.length;

  return (
    <Box className="reduce-card">

      {/* Header */}

      <Box className="reduce-header">
        <Box className="reduce-title-wrapper">

          <Box className="reduce-icon">
            <CalculateIcon />
          </Box>

          <Box>
            <Typography className="reduce-title">
              reduce() Example
            </Typography>

            <Typography className="reduce-subtitle">
              Calculate total and average marks.
            </Typography>
          </Box>

        </Box>

        <Box className="reduce-badge">
          Array Method
        </Box>
      </Box>


      {/* Subjects */}

      <Box className="reduce-subjects">

        {subjects.map((subject) => (
          <Box
            key={subject.id}
            className="reduce-subject"
          >
            <Typography className="subject-name">
              {subject.name}
            </Typography>

            <Typography className="subject-marks">
              {subject.marks}
            </Typography>
          </Box>
        ))}

      </Box>


      <Divider sx={{ my: 2 }} />


      {/* Result */}

      <Box className="reduce-result">

        <Card className="result-box" elevation={0}>
          <CardContent>
            <Typography className="result-label">
              Total Marks
            </Typography>

            <Typography className="result-value">
              {totalMarks}
            </Typography>

            <Typography className="result-description">
              Out of {subjects.length * 100}
            </Typography>
          </CardContent>
        </Card>


        <Card className="result-box" elevation={0}>
          <CardContent>
            <Typography className="result-label">
              Average Marks
            </Typography>

            <Typography className="result-value">
              {averageMarks}
            </Typography>

            <Typography className="result-description">
              Per subject
            </Typography>
          </CardContent>
        </Card>

      </Box>


      {/* Explanation */}

      <Box className="reduce-info">

        <Typography>
          <strong>reduce()</strong> processes all array
          values and returns a single result.
        </Typography>

      </Box>


      {/* Footer */}

      <Box className="reduce-footer">

        <Typography>
          Method used: <strong>reduce()</strong>
        </Typography>

      </Box>

    </Box>
  );
};

export default ReduceExample;