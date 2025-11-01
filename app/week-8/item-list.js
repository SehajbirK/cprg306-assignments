"use client";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}
   
