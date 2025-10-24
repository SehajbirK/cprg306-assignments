export default function Item({ item }) {
  return (
    <div>
      {item.name} - {item.quantity} ({item.category})
    </div>
  );
}
