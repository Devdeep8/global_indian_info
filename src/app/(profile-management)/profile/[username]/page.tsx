import { getUserIdByUsername } from "@/utils/get-current-user.helper";
import ProfileComponent from "../_components/profile-client";
import { unstable_serialize } from "swr"; // ✅ Available in server components

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  // Example: fetch data on the server

  const { username } = await params;
  const userId = await getUserIdByUsername(username);
  if (!username || username === undefined || userId === undefined || !userId) {
    return <div>User not found</div>;
  }
  const profileData = await fetch(
    `http://localhost:3000/api/users/profile/${userId}`
  ).then((res) => res.json());

  if (!profileData || profileData.success === false) {
    return <div>User not found</div>;
  }

  // const mockProfileData = {
  //   id: "1",
  //   name: "Priya Sharma",
  //   email: "priya.sharma@example.com",
  //   avatar: "/api/placeholder/150",
  //   bio: "Tech journalist covering Indian innovation globally. Passionate about telling stories that inspire and educate. 10+ years of experience in digital media and storytelling.",
  //   role: "Senior Tech Writer",
  //   location: "San Francisco, CA",
  //   website: "https://priyasharma.com",
  //   joinedAt: "2022-03-15",
  //   socialLinks: [
  //     {
  //       platform: "twitter",
  //       url: "https://twitter.com/priyasharma",
  //       icon: null, // We'll use icons in the component
  //     },
  //     {
  //       platform: "linkedin",
  //       url: "https://linkedin.com/in/priyasharma",
  //       icon: null,
  //     },
  //     {
  //       platform: "website",
  //       url: "https://priyasharma.com",
  //       icon: null,
  //     },
  //   ],
  //   stats: {
  //     articles: 156,
  //     views: 45230,
  //     likes: 3847,
  //     followers: 2847,
  //     following: 142,
  //   },
  //   expertise: [
  //     "Technology",
  //     "Startups",
  //     "Innovation",
  //     "Indian Diaspora",
  //     "Digital Media",
  //   ],
  //   achievements: [
  //     {
  //       id: "1",
  //       title: "Top Writer 2023",
  //       description:
  //         "Recognized as one of the top 10 tech writers on the platform",
  //       date: "2023-12-01",
  //       icon: null,
  //       color: "text-category-technology",
  //     },
  //     {
  //       id: "2",
  //       title: "Viral Story Award",
  //       description: "Article 'Indian AI Revolution' reached 100K+ readers",
  //       date: "2023-08-15",
  //       icon: null,
  //       color: "text-category-culture",
  //     },
  //     {
  //       id: "3",
  //       title: "Community Builder",
  //       description:
  //         "Helped 50+ writers improve their craft through mentorship",
  //       date: "2023-06-20",
  //       icon: null,
  //       color: "text-category-business",
  //     },
  //   ],
  //   recentArticles: [
  //     {
  //       id: "1",
  //       title:
  //         "Indian Entrepreneur Revolutionizes Renewable Energy in Silicon Valley",
  //       excerpt:
  //         "A groundbreaking startup founded by an Indian-American engineer is changing how we think about solar energy storage...",
  //       category: "Technology",
  //       publishedAt: "2024-01-15",
  //       views: 1520,
  //       likes: 234,
  //       comments: 45,
  //       readTime: 5,
  //     },
  //     {
  //       id: "2",
  //       title: "The Rise of Indian Founders in Global Tech Scene",
  //       excerpt:
  //         "From Silicon Valley to Singapore, Indian entrepreneurs are making their mark on the global technology landscape...",
  //       category: "Business",
  //       publishedAt: "2024-01-12",
  //       views: 980,
  //       likes: 156,
  //       comments: 23,
  //       readTime: 7,
  //     },
  //     {
  //       id: "3",
  //       title: "How Indian Culture is Shaping Global Innovation",
  //       excerpt:
  //         "The unique blend of traditional wisdom and modern thinking is creating a new paradigm in innovation...",
  //       category: "Culture",
  //       publishedAt: "2024-01-10",
  //       views: 2100,
  //       likes: 312,
  //       comments: 67,
  //       readTime: 6,
  //     },
  //   ],
  //   isFollowing: false,
  //   isOwnProfile: false,
  // };


  return (
    <main className="p-4">
      <ProfileComponent profileData={profileData.data} />
    </main>
  );
}
