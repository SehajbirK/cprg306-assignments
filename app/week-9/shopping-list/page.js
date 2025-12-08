"use client";

import { useUserAuth } from "../../contexts/AuthContext";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  if (!user) return <p>Please login first.</p>;

  return (
    <div>
      <h1>Your Shopping List</h1>

      {/* paste your Week 8 shopping list here */}
    </div>
  );
}
