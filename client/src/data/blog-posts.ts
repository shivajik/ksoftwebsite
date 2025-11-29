import { Calendar, Clock, User } from "lucide-react";
import voiceSearchImg from "@assets/stock_images/voice_assistant_smar_0d61b538.jpg";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "best-web-development-company-aurangabad-2025",
    title: "Why We Are the Best Web Development Company in Aurangabad (2025 Review)",
    excerpt: "Forget the sales pitch. Here's the honest truth about what makes a website actually work for businesses in Aurangabad.",
    author: "KSoft Team",
    date: "November 28, 2025",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    tags: ["Web Development", "Aurangabad", "Small Business", "React"],
    content: `
      <h2>Let's Talk About Web Dev in Aurangabad</h2>
      <p>You walk down Jalna Road or through Cidco, and you see hundreds of businesses. But when you search for them online? Silence. Or worse, a broken page from 2015.</p>
      <p>We're not just another <strong>web development company in Aurangabad</strong>. We're locals who are tired of seeing our city's businesses fall behind. We know that a pretty website is useless if it doesn't bring customers through the door.</p>
      
      <h3>Why Templates Don't Work Here</h3>
      <p>Buying a ₹5,000 WordPress theme seems like a bargain until it takes 10 seconds to load on a 4G connection in Waluj. Your customers won't wait. They'll just go to your competitor.</p>
      <p>We build custom because:</p>
      <ul>
        <li><strong>Speed is King:</strong> We code for the real world, where mobile data can be spotty. Learn more about how <a href="/blog/mobile-app-development-trends-2025" class="text-primary hover:underline">mobile-first thinking</a> saves sales.</li>
        <li><strong>Local SEO is Baked In:</strong> We don't just "add SEO" later. We build the site structure so Google knows you're the best in Aurangabad. Check out our <a href="/blog/top-seo-strategies-aurangabad-businesses" class="text-primary hover:underline">SEO guide</a> to see how.</li>
        <li><strong>It Actually Looks Like YOU:</strong> Your business has a personality. Your website should too. That's the core of <a href="/blog/importance-of-ui-ux-design" class="text-primary hover:underline">good UI/UX design</a>.</li>
      </ul>

      <h3>Our Tech Stack (The Geeky Stuff)</h3>
      <p>We use React and Next.js. Why should you care? Because it's what companies like Uber and Netflix use. It means your site is fast, secure, and won't crash when you run a Diwali sale.</p>

      <h3>Real Results</h3>
      <p>We recently worked with a retail shop near Prozone Mall. They had a website, but zero calls. We rebuilt it with a focus on local speed and GMB integration. Foot traffic went up 40% in two months. That's not magic; that's just good engineering.</p>

      <h2>Ready to get serious?</h2>
      <p>Stop wasting money on websites that sit there collecting digital dust. Let's build something that works.</p>
    `
  },
  {
    id: "2",
    slug: "top-seo-strategies-aurangabad-businesses",
    title: "5 Proven SEO Strategies to Dominate Local Search in Aurangabad",
    excerpt: "Ranking on Google isn't magic. It's a process. Here is exactly how we help Aurangabad businesses get found.",
    author: "SEO Specialist",
    date: "November 27, 2025",
    readTime: "7 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=2080&auto=format&fit=crop",
    tags: ["Local SEO", "Digital Marketing", "Growth Hacking", "Google Maps"],
    content: `
      <h2>How to Actually Rank in Aurangabad</h2>
      <p>Everyone promises "Page 1 results," but few deliver. Why? Because they're using generic tactics meant for New York or London, not Aurangabad. <strong>Local SEO</strong> here is different.</p>
      
      <h3>1. Fix Your Google Business Profile (Seriously)</h3>
      <p>If you haven't claimed your GMB profile, you don't exist. But it's not just about claiming it. It's about photos, accurate hours, and responding to reviews. This is the single biggest factor for showing up in that map pack.</p>

      <h3>2. Speak the Local Language</h3>
      <p>I don't mean Marathi (though that helps!). I mean search intent. People don't search for "plumbing services." They search for "plumber near TV Center." We optimize your content for these hyper-specific phrases. Combine this with <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">smart marketing</a>, and you're golden.</p>

      <h3>3. Get Listed Everywhere</h3>
      <p>JustDial, Sulekha, Facebook—your Name, Address, and Phone number (NAP) need to be identical everywhere. Even a wrong comma can confuse Google.</p>

      <h3>4. Speed Matters More Than You Think</h3>
      <p>Google penalizes slow sites. If your site takes 5 seconds to load, you're losing rank. This is why we obsess over performance in our <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">web development process</a>.</p>

      <h3>5. Reviews Are Currency</h3>
      <p>Ask your happy customers for reviews. It builds trust faster than any ad. You can even use <a href="/blog/ai-integration-small-business-guide" class="text-primary hover:underline">AI tools</a> to automate the follow-up emails.</p>

      <h2>The Bottom Line</h2>
      <p>SEO isn't a one-time fix. It's a habit. Start today, or give us a call and we'll handle the heavy lifting.</p>
    `
  },
  {
    id: "3",
    slug: "ai-integration-small-business-guide",
    title: "How AI Integration is Revolutionizing Small Businesses in Maharashtra",
    excerpt: "Think AI is just for big tech companies? Think again. Here is how local shops are using automation to save hours every week.",
    author: "Tech Lead",
    date: "November 25, 2025",
    readTime: "6 min read",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI", "Automation", "Chatbots", "Efficiency"],
    content: `
      <h2>AI Isn't Coming; It's Here.</h2>
      <p>We talk to business owners every day who are scared of AI. They think it's too expensive or too complicated. But the truth? You're probably already using it.</p>
      <p>With our <strong>AI Integration services</strong>, we're not trying to replace your staff. We're trying to take the boring stuff off their plates.</p>
      
      <h3>The "Never-Sleeps" Sales Rep</h3>
      <p>You close your shop at 9 PM. But your customers are browsing at 11 PM. Who answers their questions? A custom AI chatbot can. It can book appointments, answer FAQs, and even take orders while you sleep. It's a standard feature in <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">modern websites</a>.</p>

      <h3>Predicting What Sells</h3>
      <p>Imagine knowing you're going to run out of stock before it happens. AI analyzes your past sales to predict future demand. It's like a crystal ball, but backed by data. This is huge for <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">improving your ROI</a>.</p>

      <h3>Personalization at Scale</h3>
      <p>People hate spam. They love relevance. AI helps you send the right offer to the right person. "Hey, you bought running shoes 6 months ago, time for a new pair?" converts way better than "BUY SHOES NOW."</p>

      <h2>Don't Get Left Behind</h2>
      <p>Your competitors are likely looking into this right now. The barrier to entry has never been lower. Let's chat about what AI can actually do for <em>your</em> specific business.</p>
    `
  },
  {
    id: "4",
    slug: "mobile-app-development-trends-2025",
    title: "Mobile App Development Trends You Can't Ignore in 2025",
    excerpt: "Still debating if you need an app? The market has already decided. Here is what's working in the mobile world right now.",
    author: "Mobile Dev Team",
    date: "November 24, 2025",
    readTime: "5 min read",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Mobile Apps", "Flutter", "React Native", "UX Design"],
    content: `
      <h2>The "Mobile-Only" Customer</h2>
      <p>Look around any cafe in Aurangabad. Everyone is on their phone. If your business isn't optimized for that 6-inch screen, you're basically invisible. As a <strong>mobile app development company</strong>, we've seen the shift happen fast.</p>
      
      <h3>One Codebase, Two Platforms</h3>
      <p>It used to cost a fortune to build for iPhone and Android separately. Not anymore. With React Native and Flutter, we write code once and deploy everywhere. It saves you money and launches your app faster.</p>

      <h3>PWAs: The Middle Ground</h3>
      <p>Don't want to deal with the App Store? Progressive Web Apps (PWAs) are websites that act like apps. They work offline, send push notifications, and sit on the home screen. It's a great way to test the waters. <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">Web development</a> is evolving to support this.</p>

      <h3>If It's Hard to Use, They Delete It</h3>
      <p>Users have zero patience. If they can't find the "Buy" button in 3 seconds, they're gone. That's why <a href="/blog/importance-of-ui-ux-design" class="text-primary hover:underline">UI/UX design</a> isn't just "making it pretty"—it's about making it work.</p>

      <h2>What's Your Strategy?</h2>
      <p>You don't always need a full app. Sometimes a great mobile site is enough. We'll help you figure out what you actually need, not just sell you the most expensive option.</p>
    `
  },
  {
    id: "5",
    slug: "digital-marketing-roi-aurangabad",
    title: "Maximizing ROI: Digital Marketing Strategies that Actually Make Money",
    excerpt: "Tired of burning cash on Facebook ads? Let's talk about how to track every rupee and ensure your marketing is an investment, not an expense.",
    author: "Marketing Director",
    date: "November 22, 2025",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Marketing", "ROI", "PPC", "Social Media"],
    content: `
      <h2>Stop "Posting and Praying"</h2>
      <p>We see it all the time. Businesses posting random photos on Instagram hoping for sales. That's not marketing; that's hoping. Real <strong>digital marketing</strong> is about math.</p>
      
      <h3>Sniper Targeting</h3>
      <p>Why show your ad to all of Maharashtra when you only deliver in Aurangabad? We use geo-fencing to target users within 5km of your shop. It's cheaper and way more effective. AI can even help refine this—check out our <a href="/blog/ai-integration-small-business-guide" class="text-primary hover:underline">AI guide</a>.</p>

      <h3>PPC: Pay for Results</h3>
      <p>With Google Ads, you only pay when someone actually clicks. If they don't visit, you don't pay. It's the fastest way to get leads while your <a href="/blog/top-seo-strategies-aurangabad-businesses" class="text-primary hover:underline">organic SEO</a> builds up in the background.</p>

      <h3>Content is Trust</h3>
      <p>If you help people, they trust you. If they trust you, they buy from you. That's why we write blogs like this. It proves we know our stuff. You should be doing the same for your niche.</p>

      <h2>Show Me the Numbers</h2>
      <p>We don't do "vanity metrics" like likes. We track leads and sales. If a campaign isn't making money, we kill it. Simple as that.</p>
    `
  },
  {
    id: "6",
    slug: "importance-of-ui-ux-design",
    title: "Why Ugly Websites Are Costing You Sales",
    excerpt: "It sounds harsh, but it's true. Bad design creates distrust. Learn how good UI/UX turns visitors into paying customers.",
    author: "Design Lead",
    date: "November 20, 2025",
    readTime: "4 min read",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    tags: ["Design", "UI/UX", "Conversion", "Branding"],
    content: `
      <h2>First Impressions Are Everything</h2>
      <p>You wouldn't eat at a restaurant with a dirty entrance. Similarly, users won't buy from a site that looks broken. <strong>UI/UX Design</strong> is your digital storefront's cleanliness.</p>
      
      <h3>It's Not Just About Colors</h3>
      <p>Sure, colors matter. But UX is about <em>flow</em>. Can the user find the contact form? Is the checkout button obvious? We guide the user's eye exactly where you want it. This is a huge part of <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">professional development</a>.</p>

      <h3>Friction Kills Sales</h3>
      <p>Every extra click is a chance for the customer to give up. We ruthlessly remove friction. If it takes 5 clicks to buy, we make it 2. This directly improves your <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">marketing ROI</a>.</p>

      <h3>Accessibility is Essential</h3>
      <p>Can someone with poor vision use your site? If not, you're blocking out a huge chunk of customers. We design for everyone. It's standard practice in <a href="/blog/mobile-app-development-trends-2025" class="text-primary hover:underline">app development</a> too.</p>

      <h2>Design Pays Off</h2>
      <p>Investing in design isn't an expense; it's revenue protection. Let's make your brand look as good as it actually is.</p>
    `
  },
  {
    id: "7",
    slug: "web-development-trends-2026",
    title: "Web Dev in 2026: What's Coming Next?",
    excerpt: "The web changes fast. Here's a look at the weird and wonderful tech coming down the pipeline for 2026.",
    author: "KSoft Tech Team",
    date: "December 1, 2025",
    readTime: "6 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    tags: ["Trends 2026", "AI UI", "WebAssembly", "Green Web"],
    content: `
      <h2>The Future is Weird (and Awesome)</h2>
      <p>We're staring down the barrel of 2026, and things are getting interesting. It's not just about screens anymore. The next web is <strong>intelligent and everywhere</strong>.</p>
      
      <h3>1. Websites That Build Themselves?</h3>
      <p>Well, almost. "Generative UI" is coming. Imagine a website that changes its layout based on who is looking at it. An elderly user might get large text and simple buttons. A power user might get a dense dashboard. It's the ultimate <a href="/blog/ai-integration-small-business-guide" class="text-primary hover:underline">AI integration</a>.</p>

      <h3>2. Talking to Your Browser</h3>
      <p>Voice search is huge, but "Voice Commerce" is the next step. "Hey Google, buy that shirt in blue." If your site can't handle that command, you're missing out. This changes <a href="/blog/importance-of-ui-ux-design" class="text-primary hover:underline">UX design</a> completely.</p>

      <h3>3. The Green Web</h3>
      <p>The internet uses a ton of electricity. Low-carbon websites (clean code, dark mode defaults) will soon be a ranking factor. We're already practicing this at our <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">web development agency</a>.</p>

      <h3>4. Desktop Power in a Browser</h3>
      <p>WebAssembly (Wasm) lets us run heavy apps like video editors right in Chrome. It blurs the line between <a href="/blog/mobile-app-development-trends-2025" class="text-primary hover:underline">native apps</a> and websites.</p>

      <h2>Don't Panic</h2>
      <p>You don't need to adopt all this today. But keeping an eye on the horizon helps you steer the ship.</p>
    `
  },
  {
    id: "8",
    slug: "seo-predictions-2026",
    title: "SEO in 2026: How to Survive the AI Takeover",
    excerpt: "Google is changing. AI is answering questions directly. Here is how you stay relevant when people stop clicking links.",
    author: "SEO Strategist",
    date: "December 3, 2025",
    readTime: "8 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop",
    tags: ["SEO 2026", "SGE", "Voice Search", "Brand Authority"],
    content: `
      <h2>RIP "10 Blue Links"</h2>
      <p>By 2026, the search results page won't look like a list. It will look like a conversation. AI snapshots (SGE) are taking over the top spot. Your <a href="/blog/top-seo-strategies-aurangabad-businesses" class="text-primary hover:underline">SEO strategy</a> needs a rethink.</p>
      
      <h3>1. Become the Source</h3>
      <p>If AI gives the answer, you want it to cite YOU. To do that, you need to be the original source of data. Unique research, unique opinions, unique data. Rehashed content is dead. This puts a premium on <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">original content marketing</a>.</p>

      <h3>2. Experience is Everything (E-E-A-T)</h3>
      <p>AI can write, but it hasn't <em>lived</em>. It can't taste food or fix a leak. Google loves content that demonstrates real human experience. Show your face, show your work, prove you're real.</p>

      <h3>3. Ultra-Local</h3>
      <p>"Near me" is getting smarter. People will search for "quiet cafe with good wifi near me." Detailed, specific local listings will win. This is the evolution of our <a href="/blog/top-seo-strategies-aurangabad-businesses" class="text-primary hover:underline">local SEO services</a>.</p>

      <h2>Adapting is Key</h2>
      <p>The algorithm changes, but the goal stays the same: be the best answer. Focus on quality, and you'll be fine.</p>
    `
  },
  {
    id: "9",
    slug: "digital-marketing-2026-privacy-personalization",
    title: "Marketing in 2026: Privacy vs. Personalization",
    excerpt: "The cookie is dead. How do we target customers without being creepy? The answer lies in owned data.",
    author: "Marketing Lead",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    tags: ["Marketing 2026", "Privacy", "First-Party Data", "AR Ads"],
    content: `
      <h2>The Privacy Problem</h2>
      <p>Users want privacy, but they also want you to know exactly what they want. It's a paradox. In 2026, the solution is simple: <strong>Ask them</strong>.</p>
      
      <h3>1. First-Party Data is Gold</h3>
      <p>Third-party tracking is gone. Your email list is now your most valuable asset. Quizzes, loyalty programs, and newsletters are how you build that list. It makes measuring <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">ROI</a> much cleaner.</p>

      <h3>2. AR Ads: Try Before You Buy</h3>
      <p>Ads are getting 3D. Imagine seeing how a sofa looks in your living room through your phone camera before you buy. That's the future of retail, bridging the gap with <a href="/blog/mobile-app-development-trends-2025" class="text-primary hover:underline">mobile tech</a>.</p>

      <h3>3. Micro-Moments</h3>
      <p>We don't target "females aged 25-34" anymore. We target "someone looking for coffee right now." AI helps us identify these moments. Read our <a href="/blog/ai-integration-small-business-guide" class="text-primary hover:underline">AI guide</a> to see how.</p>

      <h2>Trust Wins</h2>
      <p>In 2026, if you respect your customer's data, they'll respect your brand. Transparency isn't just ethical; it's profitable.</p>
    `
  },
  {
    id: "10",
    slug: "geo-generative-engine-optimization-guide",
    title: "What is GEO? (And Why You Should Care)",
    excerpt: "SEO is for search engines. GEO is for AI. Learn how to get ChatGPT and Gemini to recommend your business.",
    author: "AI Strategy Lead",
    date: "December 7, 2025",
    readTime: "7 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop",
    tags: ["GEO", "Generative AI", "Search Strategies", "Future Tech"],
    content: `
      <h2>Search is Changing. Again.</h2>
      <p>Used to be, you searched for something and got a list of links. Now, you ask a question and get an answer. <strong>Generative Engine Optimization (GEO)</strong> is how you make sure <em>you</em> are that answer.</p>
      
      <h3>GEO vs. SEO</h3>
      <p><a href="/blog/top-seo-strategies-aurangabad-businesses" class="text-primary hover:underline">Traditional SEO</a> is about keywords. GEO is about <strong>facts and authority</strong>. AI models like ChatGPT look for:</p>
      <ul>
        <li><strong>Facts and Figures:</strong> Dense, data-rich content.</li>
        <li><strong>Structure:</strong> Clear headings and lists that machines can read easily.</li>
        <li><strong>Authority:</strong> Are you cited by other experts?</li>
      </ul>

      <h3>Become the "Citation"</h3>
      <p>You don't want a click; you want a mention. When someone asks "Who is the best developer in Aurangabad?", you want ChatGPT to say "KSoft Solution." To do that, you need to be everywhere on the web, building a brand footprint. Our <a href="/blog/digital-marketing-roi-aurangabad" class="text-primary hover:underline">digital marketing</a> helps build this reputation.</p>

      <h2>Start Now</h2>
      <p>GEO is new. Most businesses haven't heard of it. If you start optimizing for AI now, you'll be miles ahead when everyone else catches up.</p>
    `
  },
  {
    id: "11",
    slug: "aeo-answer-engine-optimization-strategies",
    title: "AEO: Being the Only Answer that Matters",
    excerpt: "When someone asks Alexa a question, they only get one answer. Here is how to make sure it's yours.",
    author: "Voice Search Expert",
    date: "December 9, 2025",
    readTime: "5 min read",
    category: "SEO",
    image: voiceSearchImg,
    tags: ["AEO", "Voice Search", "Zero-Click", "Siri/Alexa"],
    content: `
      <h2>Winner Takes All</h2>
      <p>In Google search, being #3 is fine. In <strong>Answer Engine Optimization (AEO)</strong>, if you aren't #1, you don't exist. When a user talks to Siri, they get one result.</p>
      
      <h3>How to Speak Robot</h3>
      <p>Answer Engines like simple, direct answers. To win:</p>
      <ul>
        <li><strong>Q&A Format:</strong> Literally write the question and the answer. "What is the best pizza in Aurangabad? The best pizza is..."</li>
        <li><strong>Schema Markup:</strong> Code that tells the engine exactly what you are. We add this to every <a href="/blog/best-web-development-company-aurangabad-2025" class="text-primary hover:underline">web project</a> we build.</li>
        <li><strong>Be Concise:</strong> Don't waffle. Answer the user's intent immediately.</li>
      </ul>

      <h3>AEO and Mobile Go Together</h3>
      <p>Most voice searches happen on phones. If your content answers the question fast, you win. This is crucial for <a href="/blog/mobile-app-development-trends-2025" class="text-primary hover:underline">mobile users</a>.</p>

      <h2>Be the Expert</h2>
      <p>You can't fake this. You need deep, accurate content that answers every specific question your customer might have.</p>
    `
  },
  {
    id: "12",
    slug: "llms-reshaping-digital-marketing-seo",
    title: "When Your Audience is an AI: Marketing to LLMs",
    excerpt: "The most important reader of your blog might not be a human. It might be an AI training model. Here is how to influence the machine.",
    author: "AI Research Team",
    date: "December 11, 2025",
    readTime: "8 min read",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1655720357761-f18ea9e5e7e6?q=80&w=2069&auto=format&fit=crop",
    tags: ["LLMs", "Content Strategy", "Brand Perception", "Machine Learning"],
    content: `
      <h2>The Robot Reader</h2>
      <p>For years, we wrote for humans. Now, we write for <strong>Large Language Models (LLMs)</strong>. These AI brains read the internet to learn about the world. If they don't know you, they can't recommend you.</p>
      
      <h3>Teaching the Machine</h3>
      <p>LLMs work on association. If your brand appears next to words like "reliable" and "expert" all over the web, the AI learns that you <em>are</em> reliable and expert. This is why <a href="/blog/digital-marketing-2026-privacy-personalization" class="text-primary hover:underline">brand building</a> is now a technical SEO requirement.</p>

      <h3>The "Skyscraper" Content</h3>
      <p>LLMs can read massive amounts of text. They prefer comprehensive, deep guides over short, thin articles. Creating the ultimate resource on a topic is the best way to get noticed.</p>

      <h3>Influence the Training Data</h3>
      <p>We use LLMs to build content (like in our <a href="/blog/ai-integration-small-business-guide" class="text-primary hover:underline">AI guide</a>), but we also need to treat them as an audience. Being mentioned in high-authority places helps "teach" the AI that you matter.</p>

      <h2>The New PR</h2>
      <p>Getting mentioned in the right places isn't just about traffic anymore; it's about training the future search engines to know who you are.</p>
    `
  }
];
