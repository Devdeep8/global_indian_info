export default async function ProfilePage({ params } : {params : Promise <{username: string}>}) {
  // Example: fetch data on the server

  const {username} = await params;
  if (!username || username === undefined) {
    return <div>User not found</div>;
  }


  return (
    <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile Page of {username}</h1>
      
    </main>
  );
}