"use client";

import { Box, Container, Typography } from "@mui/material";
import MapExample from "../../component/arrayMethod/mapExample/mapExample";
import SomeExample from "../../component/arrayMethod/SomeExample/SomeExample";
import EveryExample from "../../component/arrayMethod/EveryExample/EveryExample";
import ReduceExample from "../../component/arrayMethod/ReduceExample/ReduceExample";
import FindExample from "../../component/arrayMethod/FilterExample/FilterExample";

const ArrayMethods = () => {
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
          Array Method
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Practical examples of commonly used JavaScript array methods in real-world scenarios.
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
            mt:8,
          }}
        >
      <MapExample />
      <FindExample/>
      <SomeExample/>
      <EveryExample/>
      <ReduceExample/>
    
    </Box>
    </Container>
    </Box>

  );
};

export default ArrayMethods;