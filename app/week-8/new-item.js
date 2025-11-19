"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    function handleSubmit(e) {
        e.preventDefault();

        const item = {
            id: Date.now(),
            name,
            quantity,
            category
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Item Name</h2>
            <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h3>Quantity (1–20)</h3>

            <div className="quantity-box">
                <span>Current: {quantity}</span>

                <div className="quantity-buttons">
                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                        −
                    </button>
                    <button type="button" onClick={() => setQuantity(Math.min(20, quantity + 1))}>
                        +
                    </button>
                </div>
            </div>

            <h3>Category</h3>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Produce</option>
                <option>Bakery</option>
                <option>Meat</option>
                <option>Dairy</option>
                <option>Household</option>
                <option>Dry Goods</option>
                <option>Canned Goods</option>
            </select>

            <button className="add-btn">Add Item</button>
        </form>
    );
}
