"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import NewItem from "../../week-8/new-item";
import ItemList from "../../week-8/item-list";
import MealIdeas from "../../week-8/meal-ideas";
import itemsData from "../../week-8/items.json";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = React.useState(itemsData);
  const [selectedItemName, setSelectedItemName] = React.useState("");

  // Redirect to landing page if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // landing page
    }
  }, [user, router]);

  const handleItemSelect = (item) => {
    // Clean up item name for API (remove quantity/emoji)
    const cleanedName = item.name.split(",")[0].trim().replace(/[\u{1F300}-\u{1F6FF}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <NewItem addItem={addItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </div>
  );
}
