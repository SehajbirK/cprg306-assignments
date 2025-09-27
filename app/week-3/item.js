export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 mb-2 rounded bg-gray-100">
      <strong>{name}</strong> — Quantity: {quantity}, Category: {category}
    </li>
  );
}
