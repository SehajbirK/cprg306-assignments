"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((q) => {
      const next = q + 1;
      return next > 20 ? 20 : next;
    });
  }

  function decrement() {
    setQuantity((q) => {
      const next = q - 1;
      return next < 1 ? 1 : next;
    });
  }

  return (
    <div className="p-4 border rounded bg-white max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          -
        </button>
        <div className="text-lg font-semibold">{quantity}</div>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-3 py-1 rounded border disabled:opacity-50"
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-600">Quantity must be between 1 and 20.</p>
    </div>
  );
}
