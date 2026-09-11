"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  List,
  ListItem,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";

import "./style.css";

interface Todo {
  id: number;
  text: string;
}

const Todo = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Paper className="todo-card" elevation={0}>
      {/* Header */}

      <Box className="todo-header">
        <Box className="todo-title-wrapper">
          <Box className="todo-icon">
            <AssignmentIcon />
          </Box>

          <Box>
            <Typography className="todo-title">
              Todo List
            </Typography>

            <Typography className="todo-subtitle">
              Add and remove todos from the list.
            </Typography>
          </Box>
        </Box>

        <Box className="todo-badge">
          useState
        </Box>
      </Box>

      {/* Input */}

      <Box className="todo-input-wrapper">
        <TextField
          fullWidth
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTodo();
            }
          }}
          className="todo-input"
        />

        <Button
          variant="contained"
          onClick={addTodo}
          startIcon={<AddIcon />}
          className="todo-add-button"
        >
          Add
        </Button>
      </Box>

      {/* Todo List */}

      <List className="todo-list">
        {todos.map((todo) => (
          <Paper
            key={todo.id}
            elevation={0}
            className="todo-item"
          >
            <ListItem className="todo-list-item">
              <Box className="todo-item-content">
                <Box className="todo-checkbox" />

                <Typography className="todo-text">
                  {todo.text}
                </Typography>
              </Box>

              <IconButton
                onClick={() => deleteTodo(todo.id)}
                className="todo-delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
          </Paper>
        ))}

        {/* Empty State */}

        {todos.length === 0 && (
          <Box className="todo-empty">
            <Typography>
              No todos yet. Add your first task.
            </Typography>
          </Box>
        )}
      </List>

      {/* Footer */}

      <Box className="todo-footer">
        <Typography>
          {todos.length} {todos.length === 1 ? "item" : "items"}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Todo;