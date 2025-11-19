"use client";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // copy list so sorting doesn’t mutate original
  const items = [...itemsData];

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="max-w-xl mx-auto mt-6">
      {/* Sorting Section */}
      <div className="mb-4 text-center">
        <h2 className="text-lg font-semibold mb-2">Sort by:</h2>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded-lg border ${
              sortBy === "name"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Name
          </button>

          <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded-lg border ${
              sortBy === "category"
                ? "bg-blue-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Category
          </button>
        </div>
      </div>

      {/* Items List */}
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
