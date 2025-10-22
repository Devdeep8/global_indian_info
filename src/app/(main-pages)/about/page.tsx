import { auth } from "@/lib/auth";

export default async function AboutUsPage() {
  // Example: fetch data on the server

  const session = await auth()


  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Server Component</h1>
      <p>Fetched on the server: {session?.user?.name}</p>
      <p>Fetched on the server: {session?.user?.role}</p>
      <p>Fetched on the server: {session?.user?.id}</p>
      <p>Fetched on the server: {session?.user?.email}</p>

      
    </main>
  );
}