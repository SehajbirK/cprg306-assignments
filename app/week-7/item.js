export default function Item({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.category}</td>
    </tr>
  );
}
