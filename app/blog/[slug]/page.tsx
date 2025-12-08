"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, ChevronRight, Facebook, Twitter, Linkedin, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/blog-posts";

function formatDateToISO(dateString: string): string {
  const months: { [key: string]: string } = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12'
  };
  const parts = dateString.replace(',', '').split(' ');
  if (parts.length === 3) {
    const month = months[parts[0]] || '01';
    const day = parts[1].padStart(2, '0');
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateString;
}

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
  
  const wordCount = post.content.replace(/<[^>]+>/g, '').split(/\s+/).filter(w => w.length > 0).length;
  const isoDate = formatDateToISO(post.date);

  return (
    <div className="min-h-screen bg-background">
      <article itemScope itemType="https://schema.org/BlogPosting">
        <div className="relative w-full pt-24 md:pt-28">
          <div className="relative w-full h-[40vh] min-h-[350px] max-h-[500px] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              itemProp="image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-5xl">
              <nav className="mb-4" aria-label="Breadcrumb">
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
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl"
                itemProp="headline"
              >
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium" itemProp="name">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={isoDate} itemProp="datePublished">
                    {post.date}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{wordCount} words</span>
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
                  className="blog-content"
                  itemProp="articleBody"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
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
