"use client";

import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import Counter from "../../component/zustand/counter";
import Cart from "../../component/zustand/Cart";

const ZustandDemo = () => {


  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="xl">

        <Typography
          sx={{
            fontSize: { xs: 30, md: 42 },
            fontWeight: 900,
            color: "#111827",
            mb: 1,
          }}
        >
          Zustand Demo
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Practical examples to understand the fundamentals of Zustand demo.
        </Typography>

        {/* Practical Examples */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
         <Counter/>
         <Cart/>
        </Box>

      </Container>
    </Box>
  );
};

export default ZustandDemo;