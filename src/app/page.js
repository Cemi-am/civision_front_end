import Link from "next/link";
 
 export default function Home() {
  return (
    <main style={{ margin: "45px"}}>
      <h2>Press to go to dashboard</h2>
      <Link href="/dashboard">
        Dashboard
      </Link>
    </main>
  );
}
