"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ id: Date.now().toString(), name, quantity, category });
    setName(""); setQuantity(1); setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <button type="submit">Add Item</button>
    </form>
  );
}
