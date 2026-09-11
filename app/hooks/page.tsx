"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import "./style.css";

import UseStateExample from "./UseStateExample";
import UseEffectExample from "./UseEffectExample";
import UseContextExample from "./UseContextExample";
import UseRefExample from "./UseRefExample";
import UseMemoExample from "./UseMemoExample";
import UseCallbackExample from "./UseCallbackExample";
import UseReducerExample from "./UseReducerExample";
import CustomHookExample from "./CustomHookExample";
import UseIdExample from "./UseIdExample";
import UseTransitionExample from "./UseTransitionExample";
import UseDeferredValueExample from "./UseDeferredValueExample";
import UserForm from "./UserForm";

const cardSx = {
  height: "100%",
  borderRadius: 4,
  border: "1px solid #E5E7EB",
  boxShadow: "0 8px 30px rgba(15,23,42,0.06)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 35px rgba(15,23,42,0.10)",
  },
};

export default function HooksPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F8FAFC",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="lg">

        {/* Page Heading */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#111827",
              mb: 1,
            }}
          >
            React Hooks
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 16,
            }}
          >
            Practical examples of commonly used React Hooks
          </Typography>
        </Box>

        {/* Hooks Grid */}
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

          <UserForm/>
          {/* useState */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseStateExample />
            </CardContent>
          </Card>
          

          {/* UseEffectExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseEffectExample/>
            </CardContent>
          </Card>

          {/* UseEffectExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseContextExample/>
            </CardContent>
          </Card>

          {/* UseRefExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseRefExample />
            </CardContent>
          </Card>

          {/* UseMemoExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseMemoExample />
            </CardContent>
          </Card>

          {/* UseMemoExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
              <UseCallbackExample />
            </CardContent>
          </Card>

          { /* UseReducerExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
          <UseReducerExample/>
          </CardContent>
          </Card>

          { /* CustomHookExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
          <CustomHookExample/>
          </CardContent>
          </Card>

          { /* UseIdExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
          <UseIdExample/>
          </CardContent>
          </Card>

          { /* UseTransitionExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
          <UseTransitionExample/>
          </CardContent>
          </Card>

          { /* UseDeferredValueExample */}
          <Card sx={cardSx} className="hooks-card">
            <CardContent sx={{ p: { xs: 3, md: 4 } }} className="hooks-card-content">
          <UseDeferredValueExample/>
          </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}