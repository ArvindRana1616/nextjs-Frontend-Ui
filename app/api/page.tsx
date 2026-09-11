"use client";

import { Box, Container, Typography } from "@mui/material";
import CrudCard from "../../component/apiIntegration/CrudCard";



const APIPage = () => {
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
          API & CRUD
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 17,
            mb: 5,
          }}
        >
          Learn API integration and CRUD operations
          with practical examples.
        </Typography>

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
          <CrudCard />
        </Box>

      </Container>
    </Box>
  );
};

export default APIPage;