"use client";

import { useState, useEffect } from "react";

async function fetchMeals(ingredient) {
    if (!ingredient) return [];

    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await res.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetchMeals(ingredient).then(setMeals);
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>

            {!ingredient && <p>Select an item to see meal ideas.</p>}

            <div className="meal-list">
                {meals.map((meal) => (
                    <div key={meal.idMeal} className="meal-card">
                        <img src={meal.strMealThumb} />
                        <p>{meal.strMeal}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
