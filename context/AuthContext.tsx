"use client";

import { createContext } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  token: string | null;
  authChecking: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;