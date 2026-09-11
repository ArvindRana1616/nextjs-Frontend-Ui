"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const categories = [
 
  {
    title: "React Basics",
    description: "Components, props, state and React fundamentals.",
    path: "/react-basics",
  },
  {
    title: "Array Methods",
    description: "map, filter, find, reduce and other practical logic.",
    path: "/array-methods",
  },
  {
    title: "API",
    description: "GET, POST, PUT and DELETE CRUD examples.",
    path: "/api",
  },
  {
    title: "Hooks",
    description: "useState, useEffect and other React Hooks.",
    path: "/hooks",
  },
  {
    title: "Forms",
    description: "Forms, validation and user input handling.",
    path: "/forms",
  },
  {
    title: "Context API",
    description: "Global state management using Context API.",
    path: "/context-api",
  },
  {
    title: "UI Components",
    description: "Modal, tabs, accordion, pagination and more.",
    path: "/ui-components",
  },
];

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        {/* Hero */}

        <Box
          sx={{
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              color: "#2563EB",
              fontWeight: 700,
              fontSize: 15,
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Interview Preparation Project
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              color: "#111827",
              fontSize: {
                xs: 36,
                sm: 46,
                md: 58,
              },
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            React Interview
            <Box component="span" sx={{ color: "#2563EB" }}>
              {" "}Playground
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: {
                xs: 16,
                md: 18,
              },
              lineHeight: 1.8,
            }}
          >
            A collection of practical JavaScript, TypeScript and React
            examples built to strengthen coding logic and demonstrate
            real-world development skills.
          </Typography>
        </Box>

        {/* Categories */}

        <Grid container spacing={3}>
          {categories.map((category) => (
            <Grid
              key={category.title}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 8px 30px rgba(15,23,42,0.05)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
                    borderColor: "#BFDBFE",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "#111827",
                      mb: 1.5,
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.7,
                      flexGrow: 1,
                      mb: 3,
                    }}
                  >
                    {category.description}
                  </Typography>

                  <Button
                    component={Link}
                    href={category.path}
                    variant="contained"
                    sx={{
                      alignSelf: "flex-start",
                      borderRadius: 2,
                      px: 3,
                      textTransform: "none",
                      fontWeight: 700,
                      boxShadow: "none",

                      "&:hover": {
                        boxShadow: "none",
                      },
                    }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;