"use client";

import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

type User = {
  id: number;
  firstName: string;
  email: string;
};

const UseEffectExample = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/users/1");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await response.json();

      setUser(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Box className="hook-example">
      <Typography className="hook-name">
        useEffect
      </Typography>

      <Typography className="hook-description">
        useEffect is used to perform side effects such as API calls,
        subscriptions, and other operations after rendering.
      </Typography>

      <Box className="hook-demo">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : user ? (
          <>
            <Typography sx={{ fontWeight: 700 }}>
              {user.firstName}
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              {user.email}
            </Typography>

            <Button
              className="hook-btn hook-btn-plus"
              onClick={fetchUser}
            >
              Fetch User Again
            </Button>
          </>
        ) : (
          <Typography>No user found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default UseEffectExample;