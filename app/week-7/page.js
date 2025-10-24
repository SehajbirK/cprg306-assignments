"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => setItems(prev => [...prev, item]);
  return (
    <div>
      <h1>Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
