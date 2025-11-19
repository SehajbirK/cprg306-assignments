"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const increase = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Week 5 — New Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* ITEM NAME */}
          <div>
            <label className="block text-lg font-semibold mb-1">Item Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              placeholder="Enter item name"
            />
          </div>

          {/* QUANTITY */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Quantity (1–20)
            </label>

            <p className="text-sm text-gray-600 mb-2">
              Current: <span className="font-semibold">{quantity}</span>
            </p>

            <div className="flex items-center justify-center gap-4">
              {/* - button */}
              <button
                type="button"
                onClick={decrease}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded-full font-bold"
              >
                –
              </button>

              {/* Quantity number box */}
              <input
                type="number"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 text-center p-2 border rounded-lg"
              />

              {/* + button */}
              <button
                type="button"
                onClick={increase}
                className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-lg rounded-full font-bold"
              >
                +
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-1 text-center">
              Allowed range: 1–20
            </p>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-lg font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen">Frozen Foods</option>
              <option value="canned">Canned Goods</option>
              <option value="dry">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
