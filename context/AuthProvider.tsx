"use client";

import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
  const savedToken = localStorage.getItem("token");

  if (savedToken) {
    setToken(savedToken);

    setUser({
      id: 1,
      name: "Arvind",
      email: "arvind@example.com",
    });
  }
  setAuthChecking(false);
}, []);

const login = async (email: string, password: string) => {
  setLoading(true);

  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.log("API Error:", errorData);

      throw new Error("Login failed");
    }

    const data = await res.json();

console.log("API Response:", data);

setToken(data.accessToken);
localStorage.setItem("token", data.accessToken);

setUser({
  id: data.id,
  name: data.firstName,
  email: data.email,
});

    console.log("API Response:", data);
  } catch (error) {
    console.log("Login Error:", error);
  } finally {
    setLoading(false);
  }
};

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        loading,
        authChecking
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}