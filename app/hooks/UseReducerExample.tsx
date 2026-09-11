"use client";

import { useReducer } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

type State = {
  count: number;
};

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

const initialState: State = {
  count: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useReducer
      </Typography>

      <Typography className="hook-description">
        useReducer is used to manage state with more complex update
        logic using actions and a reducer function.
      </Typography>

      <Box className="hook-demo">
        <Typography className="hook-demo-label">
          Counter
        </Typography>

        <Typography className="hook-count">
          {state.count}
        </Typography>

        <Stack sx={{
          flexDirection:"row",
          gap:"15px",
          justifyContent:"center"}}
        >
          <Button
            className="hook-btn hook-btn-minus"
            onClick={() => dispatch({ type: "decrement" })}
          >
            −
          </Button>

          <Button
            className="hook-btn hook-btn-reset"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </Button>

          <Button
            className="hook-btn hook-btn-plus"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default UseReducerExample;