export default async function WritePage() {
  // Example: fetch data on the server
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo: { userId: number; id: number; title: string; completed: boolean } = await res.json();

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Server Component</h1>
      <p>Fetched on the server: {todo.title}</p>
      
    </main>
  );
}