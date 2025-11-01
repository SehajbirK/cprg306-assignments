"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]                       // remove ", 1 kg" etc.
      .replace(/[^\p{L}\p{N}\s]/gu, "")   // remove emojis
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <div style={{ flex: 1 }}>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>

      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}

