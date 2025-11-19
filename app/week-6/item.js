export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-xl p-4 shadow-sm bg-white my-3">
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm capitalize">Category: {category}</p>
    </li>
  );
}
