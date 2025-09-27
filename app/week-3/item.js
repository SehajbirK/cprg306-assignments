export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 mb-2 rounded shadow-sm">
      <span className="font-semibold">{name}</span> - {quantity} ({category})
    </li>
  );
}
