'use client'
import CategoriesTabs from "@/components/layout/categories-tabs";
import MainHeader from "@/components/layout/Header";

import { useState,  } from 'react'
import {  TrendingUp, Users, ChevronRight, Star, BookOpen, Heart, Share2, Clock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { toast } from 'sonner'





interface FeaturedArticle {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  authorAvatar?: string
  readTime: number
  likes: number
  views: number
  publishedAt: string
  coverImage?: string
  featured: boolean
}


const mockFeaturedArticles: FeaturedArticle[] = [
  {
    id: '1',
    title: 'Indian Entrepreneur Revolutionizes Renewable Energy in Silicon Valley',
    excerpt: 'A groundbreaking startup founded by an Indian-American engineer is changing how we think about solar energy storage, making renewable power more accessible to communities worldwide.',
    category: 'Technology',
    author: 'Priya Sharma',
    readTime: 5,
    likes: 234,
    views: 1520,
    publishedAt: '2024-01-15',
    featured: true
  },
  {
    id: '2',
    title: 'NRI Doctor Saves Lives with Innovative Healthcare Initiative in Rural Africa',
    excerpt: 'Dr. Rajesh Kumar\'s mobile health clinics are bringing quality healthcare to remote villages, impacting over 50,000 lives across three African nations.',
    category: 'Culture',
    author: 'Amit Patel',
    readTime: 7,
    likes: 189,
    views: 980,
    publishedAt: '2024-01-14',
    featured: true
  },
  {
    id: '3',
    title: 'Young Indian Scientist Makes Breakthrough in Climate Change Research',
    excerpt: '26-year-old researcher from Mumbai discovers new method to capture carbon emissions, earning international recognition and hope for a greener future.',
    category: 'Environment',
    author: 'Neha Gupta',
    readTime: 6,
    likes: 312,
    views: 2100,
    publishedAt: '2024-01-13',
    featured: true
  }
]

const mockRecentArticles: FeaturedArticle[] = [
  {
    id: '4',
    title: 'Indian-Origin CEO Named Among Fortune\'s Most Powerful Women',
    excerpt: 'Anjali Reddy, who leads a Fortune 500 tech company, is recognized for her leadership and commitment to diversity in the workplace.',
    category: 'Business',
    author: 'Vikram Singh',
    readTime: 4,
    likes: 156,
    views: 890,
    publishedAt: '2024-01-12',
    featured: false
  },
  {
    id: '5',
    title: 'Bollywood Dance Workshop Takes London by Storm',
    excerpt: 'Indian cultural ambassador teaches traditional and contemporary dance forms to over 500 students in the UK, bridging cultures through art.',
    category: 'Entertainment',
    author: 'Meera Joshi',
    readTime: 3,
    likes: 98,
    views: 650,
    publishedAt: '2024-01-11',
    featured: false
  }
]

export default  function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  // Fetch categories on mount

  // Fetch articles when category or search changes







  const handleNewsletterSubscribe = async () => {
    if (!newsletterEmail) {
      toast.error('Please enter your email address')
      return
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Successfully subscribed to newsletter!')
        setNewsletterEmail('')
      } else {
        toast.error(data.error || 'Failed to subscribe')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      toast.error('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className="">
      <MainHeader />
      <div>
        <CategoriesTabs/>
      </div>
          {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-12 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/image.png" 
            alt="Global Indian Professionals"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium px-4 py-2">
              <TrendingUp className="w-4 h-4 mr-2" />
              Positive News from the Global Indian Community
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Celebrating Indian Excellence
              <span className="block text-primary">Worldwide</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover inspiring stories of Indians and the diaspora making a positive impact across the globe. 
              From innovation to culture, business to service - we bring you news that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Reading
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
    

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Articles */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Featured Stories</h2>
                <Badge variant="secondary" className="text-sm">
                  <Star className="w-4 h-4 mr-1" />
                  Editor's Choice
                </Badge>
              </div>
              

                <div className="space-y-6">
                  {mockFeaturedArticles.map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary">{article.category}</Badge>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime} min read</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-bold leading-tight hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage src={article.authorAvatar} />
                                <AvatarFallback>
                                  <User className="h-4 w-4" />
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium text-sm">{article.author}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(article.publishedAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Heart className="h-4 w-4" />
                                <span>{article.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>{article.views}</span>
                              </div>
                              <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>

            {/* Recent Stories */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Recent Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockRecentArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <Badge variant="outline" className="text-xs">{article.category}</Badge>
                        <h3 className="font-semibold leading-tight line-clamp-2 hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.author}</span>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-3 w-3" />
                            <span>{article.readTime} min</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Stay Updated</span>
                </CardTitle>
                <CardDescription>
                  Get the latest positive news delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Enter your email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubscribe()}
                />
                <Button className="w-full" onClick={handleNewsletterSubscribe}>
                  Subscribe Now
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Join 10,000+ readers getting inspired daily
                </p>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Trending Topics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Innovation', 'Leadership', 'Culture', 'Service', 'Excellence', 'Impact'].map((topic) => (
                    <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Our Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">Stories Shared</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">120+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1M+</div>
                    <div className="text-sm text-muted-foreground">Lives Impacted</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Contributors</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </div>
  );
}



