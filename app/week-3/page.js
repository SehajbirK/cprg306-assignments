import ItemList from './item-list';

export default function Page() {
  return (
    <main className="max-w-md mx-auto mt-10 p-4 bg-gray-50 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
