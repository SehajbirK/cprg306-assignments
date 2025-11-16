import Link from "next/link";

export default function StudentInfo() {
  // Replace these with your real name and GitHub repo URL
  const studentName = "Sehajbir Kaur";
  const githubUrl = "https://github.com/SehajbirK/cprg306-assignments";

  return (
    <div className="border p-4 rounded bg-white shadow-sm">
      <p className="font-semibold">Name: {studentName}</p>
      <p className="mt-2">
        GitHub: <Link className="text-blue-600 underline" href={githubUrl}>{githubUrl}</Link>
      </p>
    </div>
  );
}
