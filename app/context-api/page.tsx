"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useAuth } from "../../context/useAuth";
import { useRouter } from "next/navigation";

export default function ContextApiPage() {
  const { login, user, token, loading, logout } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  await login(email, password);

  router.push("/dashboard");
};

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 64px)",
        background: "#F8FAFC",
        py: { xs: 5, md: 8 },
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            borderRadius: 4,
            border: "1px solid #E5E7EB",
            boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  color: "#111827",
                  mb: 1,
                }}
              >
                Context API
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 15,
                }}
              >
                Login using React Context API
              </Typography>
            </Box>

            {!user ? (
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  required
                />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: 16,
                    fontWeight: 700,
                    boxShadow: "none",
                  }}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Box>
            ) : (
              <Box>
                <Alert severity="success" sx={{ mb: 3 }}>
                  Login successful!
                </Alert>

                <Box
                  sx={{
                    background: "#F8FAFC",
                    borderRadius: 3,
                    p: 3,
                    mb: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#111827",
                      mb: 1,
                    }}
                  >
                    Welcome, {user.name}
                  </Typography>

                  <Typography sx={{ color: "#64748B" }}>
                    {user.email}
                    {token && (
                      <Typography
                        sx={{
                          mt: 2,
                          p: 2,
                          background: "#F1F5F9",
                          borderRadius: 2,
                          wordBreak: "break-all",
                        }}
                      >
                        Token: {token}
                      </Typography>
                    )}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  onClick={logout}
                  sx={{
                    py: 1.3,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Logout
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}