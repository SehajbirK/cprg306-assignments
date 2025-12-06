import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
      <p className="mb-4">Select a week:</p>
      <ul className="grid grid-cols-2 gap-2">
        <li><Link className="text-blue-600 underline" href="/week-1">Week 1</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-2">Week 2</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-3">Week 3</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-4">Week 4</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-5">Week 5</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-6">Week 6</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-7">Week 7</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-8">Week 8</Link></li>
        <li><Link className="text-blue-600 underline" href="/week-9">Week 9</Link></li>
      </ul>
    </main>
  );
}
