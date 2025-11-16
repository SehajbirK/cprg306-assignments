export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border rounded mb-2 flex justify-between items-start bg-white">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-600">{category}</div>
      </div>
      <div className="text-sm font-medium">x{quantity}</div>
    </li>
  );
}
