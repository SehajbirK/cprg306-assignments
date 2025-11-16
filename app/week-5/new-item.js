"use client";
import { useState } from "react";

export default function NewItem() {
  // Week 5: Add name and category state
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1); // already in Week 4
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((q) => Math.min(q + 1, 20));
  const decrement = () => setQuantity((q) => Math.max(q - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item submitted:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    // Reset fields
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded shadow space-y-4"
    >
      <h1 className="text-xl font-semibold text-center">Add New Item</h1>

      {/* Name Field */}
      <div>
        <label className="block font-medium mb-1">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      {/* Quantity Field */}
      <div>
        <label className="block font-medium mb-1">Quantity</label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            +
          </button>
        </div>
      </div>

      {/* Category Field */}
      <div>
        <label className="block font-medium mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded px-2 py-1"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
