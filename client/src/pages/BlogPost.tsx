import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>{post.title} | KSoft Solution Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <article className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog">
          <a className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </a>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative h-[400px] rounded-3xl overflow-hidden mb-10 shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Related Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-8">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-28">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex gap-2 mb-8">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-colors">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  {/* Add more social share buttons as needed */}
                </div>

                <h3 className="text-xl font-bold mb-4">Need help with {post.category}?</h3>
                <p className="text-muted-foreground mb-6">
                  We specialize in {post.category} services in Aurangabad. Let's discuss how we can help your business grow.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-primary text-primary-foreground font-bold py-6">
                    Get a Free Consultation
                  </Button>
                </Link>
              </div>
            </aside>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
