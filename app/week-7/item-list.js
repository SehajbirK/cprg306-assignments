import Item from "./item";
export default function ItemList({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => <Item key={item.id} item={item} />)}
      </tbody>
    </table>
  );
}
