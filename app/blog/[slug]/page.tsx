"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, ChevronRight, Facebook, Twitter, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const handleShare = async (platform?: string) => {
    const shareUrl = window.location.href;
    const shareText = `${post.title} - ${post.excerpt}`;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
    } else {
      try {
        if (navigator.share) {
          await navigator.share({
            title: post.title,
            text: post.excerpt,
            url: shareUrl,
          });
        } else {
          await navigator.clipboard.writeText(shareUrl);
          alert("Link copied to clipboard!");
        }
      } catch (error) {
        console.error("Error sharing:", error);
      }
    }
  };

  const recentPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 4);

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const categories = Array.from(new Set(blogPosts.map(p => p.category)));

  return (
    <div className="min-h-screen bg-background">
      <article itemScope itemType="https://schema.org/BlogPosting">
        <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            itemProp="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="container mx-auto max-w-5xl">
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-sm text-white/80">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <ChevronRight className="w-4 h-4" />
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <ChevronRight className="w-4 h-4" />
                  <li className="text-white font-medium truncate max-w-[200px]">{post.title}</li>
                </ol>
              </nav>
              
              <span 
                className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-lg"
                itemProp="articleSection"
              >
                {post.category}
              </span>
              
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl"
                itemProp="headline"
              >
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
                <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium" itemProp="name">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={new Date(post.date).toISOString()} itemProp="datePublished">
                    {post.date}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{post.content.split(/\s+/).length} words</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full"
            >
              <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 shadow-lg mb-8">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-medium border-l-4 border-primary pl-6 italic" itemProp="description">
                  {post.excerpt}
                </p>
                
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-24
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4
                    prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-base prose-p:md:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-li:text-base prose-li:md:text-lg prose-li:text-muted-foreground prose-li:leading-relaxed prose-li:mb-2
                    prose-ul:my-6 prose-ul:space-y-2
                    prose-ol:my-6 prose-ol:space-y-2
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                    prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-muted prose-pre:rounded-xl prose-pre:shadow-lg
                  "
                  itemProp="articleBody"
                >
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>

              <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-lg mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2" itemProp="keywords">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3">Share this article</h3>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleShare()}
                        className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent transition-colors"
                        aria-label="Copy link"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map(related => (
                      <Link 
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="group"
                      >
                        <div className="rounded-xl overflow-hidden mb-4">
                          <img 
                            src={related.image}
                            alt={related.title}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">{related.category}</span>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                          {related.title}
                        </h3>
                        <span className="text-sm text-muted-foreground mt-2 block">{related.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <Link 
                  href="/blog"
                  className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to all articles
                </Link>
                
                <div className="rounded-xl border border-border/50 bg-card shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50 p-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Tag className="w-4 h-4 text-primary" />
                      Categories
                    </h3>
                  </div>
                  <div className="flex flex-col divide-y divide-border/50">
                    {categories.map(category => {
                      const count = blogPosts.filter(p => p.category === category).length;
                      return (
                        <Link 
                          key={category} 
                          href="/blog"
                          className="flex items-center justify-between p-4 hover:bg-primary/5 transition-colors group"
                        >
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                            {category}
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs bg-secondary px-2 py-1 rounded-full">{count}</span>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50 p-4">
                    <h3 className="text-lg font-bold">Recent Articles</h3>
                  </div>
                  <div className="flex flex-col divide-y divide-border/50">
                    {recentPosts.map(recent => (
                      <Link 
                        key={recent.id} 
                        href={`/blog/${recent.slug}`}
                        className="flex gap-4 p-4 hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                          <img 
                            src={recent.image} 
                            alt={recent.title} 
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col justify-center min-w-0">
                          <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            {recent.title}
                          </h4>
                          <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {recent.date}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg overflow-hidden">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Need Expert Help?</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      We specialize in {post.category} services. Let&apos;s take your business to the next level.
                    </p>
                    <Link 
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg text-sm font-bold transition-all bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 h-12 px-6 w-full"
                    >
                      Get a Free Consultation
                    </Link>
                  </div>
                </div>

                <div className="rounded-xl border border-border/50 bg-card shadow-lg p-6">
                  <h3 className="font-bold mb-4">About the Author</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-xl">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">KSoft Solution Team</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Experts in web development, SEO, AI integration, and digital marketing helping businesses grow in Aurangabad and beyond.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}
