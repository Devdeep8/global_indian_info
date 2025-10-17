import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">🏠 Home Page</h1>
      <Link
        href="/sign-in"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Open Sign-In Modal
      </Link>
    </main>
  );
}
