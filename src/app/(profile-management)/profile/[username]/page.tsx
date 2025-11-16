import { getUserIdByUsername } from "@/utils/get-current-user.helper";

export default async function ProfilePage({ params } : {params : Promise <{username: string}>}) {
  // Example: fetch data on the server

  const {username} = await params;
  const userId = await getUserIdByUsername(username);
  if (!username || username === undefined || userId === undefined || !userId) {
    return <div>User not found</div>;
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page of {username } , {userId}</h1>
    </main>
  );
}