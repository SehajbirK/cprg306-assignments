"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return; // simple validation

    const newItem = {
      id: Date.now(),
      name: name + (quantity ? `, ${quantity}` : ""),
      quantity,
      category,
    };
    onAddItem(newItem);

    // Reset fields
    setName("");
    setQuantity("");
    setCategory("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "20px",
        maxWidth: "300px",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Add New Item</h3>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Item Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Chicken Breast"
          style={{ width: "100%", padding: "6px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Quantity:</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g., 1 kg"
          style={{ width: "100%", padding: "6px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., Meat, Vegetable"
          style={{ width: "100%", padding: "6px" }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "8px 12px",
          backgroundColor: "#5A38FD",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </form>
  );
}

