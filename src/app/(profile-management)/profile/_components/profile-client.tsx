"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Calendar,
  MapPin,
  Globe,
  Briefcase,
  Award,
  BookOpen,
  Heart,
  Users,
  Edit3,
  Share2,
  Settings,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  TrendingUp,
  Eye,
  MessageCircle,
  Badge as BadgeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  views: number;
  likes: number;
  comments: number;
  readTime: number;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  color: string;
}

interface ProfileData {
  avatarUrl: string | Blob | undefined;
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  role: string;
  location: string;
  website?: string;
  joinedAt: string;
  socialLinks: SocialLink[];
  stats: {
    articles: number;
    views: number;
    likes: number;
    followers: number;
    following: number;
  };
  expertise: string[];
  achievements: Achievement[];
  recentArticles: Article[];
  isFollowing: boolean;
  isOwnProfile: boolean;
}

export default function ProfileComponent({
  profileData,
}: {
  profileData: ProfileData;
}) {
  const [activeTab, setActiveTab] = useState("articles");
  const [isFollowing, setIsFollowing] = useState(true);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Implement follow/unfollow API call
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: `${profileData.name}'s Profile`,
        text: `Check out ${profileData.name}'s profile on Global Indian Info`,
        url: window.location.href,
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Avatar Section */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-lg">
                <AvatarImage
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                />
                <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-2xl font-bold text-reading">
                  {profileData.name}
                </h1>
                <p className="text-muted-foreground font-medium">
                  {profileData.role}
                </p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
                <div className="space-y-2 flex-1">
                  <p className="text-muted-foreground leading-relaxed max-w-2xl font-reading leading-reading">
                    {profileData.bio}
                  </p>

                  {profileData.website && (
                    <div className="flex items-center gap-2 text-sm text-category-technology hover:text-category-technology/80 transition-colors">
                      <Globe className="h-4 w-4" />
                      <a
                        href={profileData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {profileData.website
                          .replace("https://", "")
                          .replace("www.", "")}
                      </a>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-2">
                  {/* {!profileData.isOwnProfile && (
                    <Button 
                      onClick={handleFollow}
                      variant={isFollowing ? "outline" : "default"}
                      className="min-w-32"
                    >
                      {isFollowing ? "Following" : "Follow"}
                    </Button>
                  )}
                   */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                    {profileData.isOwnProfile && (
                      <Button variant="outline" size="icon">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {Object.entries(profileData.socialLinks || {}).map(
                  ([icon, url], index) => (
                    <a
                      key={index}
                      href={url as any}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {icon}
                    </a>
                  )
                )}
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.articles}</div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.views.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.likes.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.following}</div>
                  <div className="text-sm text-muted-foreground">Following</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="space-y-4 mt-6">
                <div className="space-y-4">
                  {profileData.achievements?.map((achievement) => (
                    <Card key={achievement.id} className="border-border/50">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-full bg-muted ${achievement.color}`}
                          >
                            {achievement.icon}
                          </div>
                          <div className="flex-1 space-y-2">
                            <h3 className="font-semibold">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(achievement.date)}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
        </div>
      </div>
    </div>
  );
}
