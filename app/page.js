import Link from 'next/link';

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CPRG306 Assignments</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link href="/week-3" className="text-blue-600 underline">Week 3: Shopping List</Link></li>
      </ul>
    </main>
  );
}
