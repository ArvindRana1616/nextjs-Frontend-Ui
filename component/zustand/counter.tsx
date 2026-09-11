"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import useCounterStore from "../../ZustandStore/counterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);

  return (
    <Box>
      <Card
        sx={{
          width: "100%",
          height:"100%",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography sx={{
            variant:"h5",
            fontWeight:"700",
            textAlign:"center"}}
            gutterBottom
          >
            Zustand Counter
          </Typography>

          <Typography sx={{
            variant:"body2",
            color:"text.secondary",
            textAlign:"center",
            mb:"3"}}
          >
            Simple state management using Zustand
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              textAlign: "center",
              mb: 3,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Current Count
            </Typography>

            <Typography sx={{
              variant:"h2",
              fontWeight:"700",
              my: "1" }}
            >
              {count}
            </Typography>
          </Box>

          <Box sx={{
            display:"flex",
            justifyContent:"center",
            gap:"10px",}}
          >
            <Button
              variant="contained"
              onClick={decrement}
            >
              -
            </Button>

            <Button
              variant="outlined"
              onClick={reset}
            >
              Reset
            </Button>

            <Button
              variant="contained"
              onClick={increment}
            >
              +
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}