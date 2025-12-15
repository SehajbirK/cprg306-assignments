"use client";

import { useState, useEffect } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../../contexts/AuthContext";

export default function ShoppingList() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [ingredient, setIngredient] = useState("");

  // Load items when user is available
  useEffect(() => {
    if (user) loadItems();
  }, [user]);

  const loadItems = async () => {
    if (!user) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  const handleAddItem = async (item) => {
    if (!user) return;
    const id = await addItem(user.uid, item);
    setItems([...items, { ...item, id }]);
  };

  const handleSelect = (item) => {
    setIngredient(item.name.split(",")[0].replace(/[^\w\s]/gi, "").trim());
  };

  return (
    <main className="page">
      <div className="left-column">
        <h1>Shopping List + Meal Ideas</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleSelect} />
      </div>
      <div className="right-column">
        <MealIdeas ingredient={ingredient} />
      </div>
    </main>
  );
}
