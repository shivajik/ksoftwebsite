"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "web-development-trends-2025",
    title: "Top Web Development Trends for 2025",
    excerpt: "Discover the latest trends shaping the future of web development, from AI-powered tools to edge computing.",
    image: "/stock_images/web_development_trends.jpg",
    category: "Web Development",
    date: "Nov 15, 2024",
    readTime: "5 min read",
    author: "KSoft Team"
  },
  {
    id: 2,
    slug: "local-seo-aurangabad-guide",
    title: "Complete Guide to Local SEO in Aurangabad",
    excerpt: "Learn how to optimize your business for local search and attract more customers in Chhatrapati Sambhaji Nagar.",
    image: "/stock_images/local_seo_guide.jpg",
    category: "SEO",
    date: "Nov 10, 2024",
    readTime: "8 min read",
    author: "KSoft Team"
  },
  {
    id: 3,
    slug: "ai-integration-business",
    title: "How AI Integration Can Transform Your Business",
    excerpt: "Explore practical ways to integrate AI into your business operations for improved efficiency and customer experience.",
    image: "/stock_images/ai_business.jpg",
    category: "AI",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    author: "KSoft Team"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
          >
            Latest Insights & News
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Expert advice on Web Development, SEO, and Digital Transformation to help your business grow in Aurangabad and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <User className="w-4 h-4 text-primary" />
                      {post.author}
                    </div>
                    <span className="flex items-center text-primary text-sm font-bold group-hover:translate-x-1 transition-transform">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
