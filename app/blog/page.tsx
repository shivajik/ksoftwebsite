"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag, Search, TrendingUp } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { useState, useMemo } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => 
    Array.from(new Set(blogPosts.map(p => p.category))),
    []
  );

  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts];
    
    if (selectedCategory) {
      posts = posts.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
    }
    
    return posts;
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6"
            >
              <TrendingUp className="w-4 h-4 inline mr-2" />
              {blogPosts.length} Expert Articles
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary"
            >
              Digital Growth Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Expert advice on Web Development, SEO, AI Integration, and Digital Marketing to help your business thrive in Chhatrapati Sambhaji Nagar and beyond.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-border/50 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground mr-2">Filter:</span>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === null 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-primary text-primary-foreground shadow-md' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 rounded-full border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </div>
      </section>

      {!selectedCategory && !searchQuery && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto md:min-h-[400px] overflow-hidden">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                      {featuredPost.category}
                    </span>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary" />
                        <span className="font-medium">{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <span className="inline-flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                      Read Full Article <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <Tag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  {selectedCategory ? `${selectedCategory} Articles` : 'Latest Articles'}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(selectedCategory || searchQuery ? 0 : 1).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col"
                  >
                    <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                      <div className="relative h-52 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white text-xs font-bold">
                              {post.author.charAt(0)}
                            </div>
                            <span className="text-sm font-medium">{post.author}</span>
                          </div>
                          <span className="flex items-center text-primary text-sm font-bold group-hover:translate-x-1 transition-transform">
                            Read <ArrowRight className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to grow your business?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get expert insights delivered to your inbox. We share actionable tips on SEO, web development, and digital marketing.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 h-12 px-8"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
