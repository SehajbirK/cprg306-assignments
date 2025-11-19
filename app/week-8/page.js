"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [ingredient, setIngredient] = useState("");

    function clean(name) {
        return name.split(",")[0].replace(/[^\w\s]/gi, "").trim();
    }

    function handleSelect(item) {
        setIngredient(clean(item.name));
    }

    function handleAddItem(item) {
        setItems([...items, item]);
    }

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
