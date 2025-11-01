export default function Item({ item, onSelect }) {
  return (
    <li onClick={() => onSelect(item)} style={{ cursor: "pointer" }}>
      {item.name} ({item.category}) – {item.quantity}
    </li>
  );
}

