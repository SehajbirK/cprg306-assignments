"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sorted = [...items].sort((a, b) =>
        a[sortBy].localeCompare(b[sortBy])
    );

    return (
        <div>
            <h2>Sort by:</h2>

            <div className="sort-buttons">
                <button onClick={() => setSortBy("name")}>Name</button>
                <button onClick={() => setSortBy("category")}>Category</button>
            </div>

            <ul>
                {sorted.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                        onSelect={() => onItemSelect(item)}
                    />
                ))}
            </ul>
        </div>
    );
}
