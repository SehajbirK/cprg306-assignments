import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Sehajbir Kaur</p>
      <Link 
        href="https://github.com/SehajbirK/cprg306-assignments" 
        target="_blank"
      >
        My GitHub Repository
      </Link>
    </div>
  );
}
