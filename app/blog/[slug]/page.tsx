"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts, BlogPost } from "@/lib/blog-posts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const recentPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <Link 
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl border border-white/10">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block shadow-lg shadow-primary/20">
                  {post.category}
                </span>
              </div>
            </div>

            <header className="mb-10">
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-8">
                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </header>

            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-lg
              "
            >
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-secondary/50 hover:bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm transition-colors cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Share:</span>
                  <button 
                    onClick={handleShare} 
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.article>

          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="bg-secondary/30 border-b border-border/50 p-4">
                  <h3 className="text-lg font-bold flex items-center gap-2">
                    <Tag className="w-4 h-4 text-primary" />
                    Categories
                  </h3>
                </div>
                <div className="flex flex-col divide-y divide-border/50">
                  {categories.map(category => (
                    <Link 
                      key={category} 
                      href="/blog"
                      className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group"
                    >
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {category}
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="bg-secondary/30 border-b border-border/50 p-4">
                  <h3 className="text-lg font-bold">Recent Articles</h3>
                </div>
                <div className="flex flex-col divide-y divide-border/50">
                  {recentPosts.map(recent => (
                    <Link 
                      key={recent.id} 
                      href={`/blog/${recent.slug}`}
                      className="flex gap-4 p-4 hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <img 
                          src={recent.image} 
                          alt={recent.title} 
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors mb-1">
                          {recent.title}
                        </h4>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {recent.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-lg overflow-hidden relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full -mr-4 -mt-4" />
                <div className="p-6 text-center relative z-10">
                  <h3 className="text-xl font-bold mb-3">Need Expert Help?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    We specialize in {post.category} services. Let&apos;s take your business to the next level.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                  >
                    Get a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
