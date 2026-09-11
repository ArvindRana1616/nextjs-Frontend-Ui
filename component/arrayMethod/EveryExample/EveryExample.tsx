"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";

import "./style.css";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Design Homepage",
    completed: true,
  },
  {
    id: 2,
    title: "Create API",
    completed: false,
  },
  {
    id: 3,
    title: "Test Login",
    completed: true,
  },
];

const EveryExample = () => {
  const allTasksCompleted = tasks.every(
    (task) => task.completed
  );

  return (
    <Box className="every-card">

      {/* Header */}

      <Box className="every-header">

        <Box className="every-title-wrapper">

          <Box className="every-icon">
            <TaskAltIcon />
          </Box>

          <Box>
            <Typography className="every-title">
              every() Example
            </Typography>

            <Typography className="every-subtitle">
              Check whether all tasks are completed.
            </Typography>
          </Box>

        </Box>

        <Box className="every-badge">
          Array Method
        </Box>

      </Box>


      {/* Result */}

      <Card className="every-result" elevation={0}>
        <CardContent>

          <Box className="every-result-header">

            {allTasksCompleted ? (
              <CheckCircleIcon className="every-success-icon" />
            ) : (
              <PendingIcon className="every-pending-icon" />
            )}

            <Box>

              <Typography className="every-result-title">
                {allTasksCompleted
                  ? "All Tasks Completed!"
                  : "Tasks Are Still Pending"}
              </Typography>

              <Typography className="every-result-text">
                {allTasksCompleted
                  ? "Every task in the list has been completed."
                  : "One or more tasks are still incomplete."}
              </Typography>

            </Box>

          </Box>

        </CardContent>
      </Card>


      {/* Tasks */}

      <Box className="every-tasks">

        {tasks.map((task) => (
          <Box
            key={task.id}
            className="every-task"
          >

            <Box className="every-task-info">

              {task.completed ? (
                <CheckCircleIcon className="task-completed-icon" />
              ) : (
                <PendingIcon className="task-pending-icon" />
              )}

              <Typography className="every-task-title">
                {task.title}
              </Typography>

            </Box>

            <Chip
              label={
                task.completed
                  ? "Completed"
                  : "Pending"
              }
              size="small"
              color={
                task.completed
                  ? "success"
                  : "warning"
              }
            />

          </Box>
        ))}

      </Box>


      {/* Explanation */}

      <Box className="every-info">

        <Typography>
          <strong>every()</strong> returns{" "}
          <strong>true</strong> only when all items
          satisfy the condition.
        </Typography>

      </Box>


      {/* Footer */}

      <Box className="every-footer">

        <Typography>
          Method used: <strong>every()</strong>
        </Typography>

      </Box>

    </Box>
  );
};

export default EveryExample;