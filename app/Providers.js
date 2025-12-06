// app/Providers.js
// app/Providers.js
"use client";
import { AuthContextProvider } from "./contexts/AuthContext";

export function Providers({ children }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

