export default function Page() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Week 1 — Development Environment & Debugging</h1>

      <section className="mb-4">
        <h2 className="font-semibold">Part 1 — Node.js Screenshot</h2>
        <p className="text-sm mb-2">
          Place your Node.js prompt screenshot at <code>/app/week-1/assets/node-screenshot.png</code>.
          A placeholder file exists now — replace it with a real PNG before submitting.
        </p>
        <div className="p-4 border rounded bg-gray-50">
          <p className="italic">Screenshot placeholder: replace <code>node-screenshot.png</code> with your actual image.</p>
        </div>
      </section>

      <section>
        <h2 className="font-semibold">Part 2 — Fixed project (starter debugging)</h2>
        <p className="text-sm">
          Debug the starter project, fix HTML/CSS/JS errors, add a <code>.gitignore</code> (node_modules), and put static assets in the assets folder.
        </p>
        <ol className="list-decimal ml-5 mt-2">
          <li>Fork & clone starter repo.</li>
          <li>Fix logic & syntax errors; ensure no console errors.</li>
          <li>Add your screenshot to <code>app/week-1/assets/</code>.</li>
        </ol>
      </section>

      <p className="mt-6 text-sm">When ready, ensure repository is public and named <strong>cprg306-assignments</strong>.</p>
    </main>
  );
}
