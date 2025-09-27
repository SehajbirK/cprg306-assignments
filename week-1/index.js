"use strict";

// Sample data
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// Exercise 1 & reusable function
function renderList(array, elementId) {
  const list = document.getElementById(elementId);
  list.innerHTML = ""; // Clear existing content
  array.forEach(item => {
    if (!item.name) {
      console.error("Missing name property", item);
      return;
    }
    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
}

// Exercise 4: Filter by age
function renderByAge(array, ageThreshold, elementId) {
  const filtered = array.filter(user => user.age < ageThreshold);
  renderList(filtered, elementId);
}

// Exercise 5 & 6: Error handling version
function renderListWithErrors(array, elementId, errorDivId) {
  const list = document.getElementById(elementId);
  const errorDiv = document.getElementById(errorDivId);
  list.innerHTML = "";
  errorDiv.innerHTML = "";

  array.forEach(item => {
    if (!item.name) {
      console.error("Missing name property", item);
      const errorMsg = document.createElement("p");
      errorMsg.textContent = `Error: Missing name for id ${item.id}`;
      errorDiv.appendChild(errorMsg);
      return;
    }
    const li = document.createElement("li");
    li.textContent = item.name;
    list.appendChild(li);
  });
}

// ------------------ Run Exercises ------------------

// Exercise 1
console.log("Exercise 1:");
users.forEach(u => console.log(u.name));
renderList(users, "names-list");

// Exercise 2
console.log("Exercise 2:");
const youngUsers = users.filter(u => u.age < 40);
console.log(youngUsers.map(u => u.name));
renderList(youngUsers, "young-characters-list");

// Exercise 3
console.log("Exercise 3:");
renderList(users, "function-list");

// Exercise 4
console.log("Exercise 4:");
renderByAge(users, 50, "age-filter-list");

// Exercise 5 (already handled in renderListWithErrors)

// Exercise 6
const brokenUsers = [
  { id: 1, age: 20 },
  { id: 2, name: "Valid User", age: 35 },
  { id: 3 }
];
console.log("Exercise 6:");
renderListWithErrors(brokenUsers, "broken-array-list", "broken-array-errors");
