"use client";

import { useAuth } from "../../context/useAuth";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { user, token,authChecking } = useAuth();
  const router = useRouter();
  
useEffect(() => {
  if (!authChecking && (!user || !token)) {
    router.replace("/context-api");
  }
}, [user, token, authChecking, router]);

if (authChecking || !user || !token) {
  return null;
}

  return (
    <div>
        Username: emilys
Password: emilyspass
      <h1>Dashboard</h1>

      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Token: {token}</p>
    </div>
  );
}