"use client";
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  }

  async function loadMealIdeas() {
    if (ingredient) {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient || "..."}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}

