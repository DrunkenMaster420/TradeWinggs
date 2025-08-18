"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";

// --- SVG Icon Components (replaces react-icons) ---

interface IconProps {
  className?: string;
  size?: number;
}

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
}

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

// User Icon SVG
const FiUser: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Clock Icon SVG
const FiClock: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

// ArrowRight Icon SVG
const FiArrowRight: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// Close Icon SVG
const FiX: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const blogPosts = [
  {
    title: "The Power of Visual Content: Why Design Matters",
    excerpt:
      "Ever scrolled through social media and stopped because something looked amazing? That’s the magic of good design. In the fast-moving digital world, visuals play the biggest role...",
    author: "Jane Doe",
    date: "Aug 12, 2025",
    readTime: "4 min read",
    content: `Ever scrolled through social media and stopped because something looked amazing? That’s the magic of good design. In the fast-moving digital world, people decide in just a few seconds whether they want to pay attention to your brand — and visuals play the biggest role in that decision. Let’s break down why design matters so much and how it can boost your marketing.

1️⃣ First Impressions Happen in Seconds
Your audience will judge your brand almost instantly based on what they see. A clean, attractive design makes your business look professional, trustworthy, and worth their time.

2️⃣ Good Design Grabs Attention
We’re all scrolling through endless posts every day. A well-designed post, ad, or website can stop that scroll and make someone click to learn more.

3️⃣ Visuals Make Your Brand Memorable
Colors, fonts, and layouts create a visual identity people remember. Think about big brands — you recognize them instantly because of their consistent design style. You can do the same, even as a small business.

4️⃣ Design Helps Tell Your Story
A picture can say what a paragraph sometimes can’t. Through images, infographics, and videos, you can show your product’s benefits or your brand values in a way that’s quick and easy to understand.

5️⃣ Great Design Boosts Conversions
It’s not just about looking good — design can guide people to take action. Clear call-to-action buttons, well-placed images, and easy-to-read layouts can turn visitors into customers.

💡 Final Word:
In 2025, design isn’t optional — it’s a core part of your marketing. Invest in good visuals, stay consistent with your style, and you’ll see the difference in engagement, trust, and sales.`,
  },
  {
    title: "5 Digital Marketing Trends to Watch in 2025",
    excerpt:
      "Digital marketing never sits still — and neither should your strategy. If you want your business to shine this year, you’ve got to know what’s hot, what’s fading, and what’s about to explode.",
    author: "John Smith",
    date: "Aug 10, 2025",
    readTime: "5 min read",
    content: `Digital marketing never sits still — and neither should your strategy. If you want your business to shine this year, you’ve got to know what’s hot, what’s fading, and what’s about to explode. Here’s the lowdown on 5 trends that will rule 2025 (and how you can ride the wave).

1️⃣ AI is Your New Marketing Buddy
Forget the scary robot image — AI is here to make your life easier. From writing captions to suggesting the perfect ad audience, AI tools are getting smarter by the day. In 2025, they’ll even help you predict what your customers want before they ask. Use it or risk falling behind.

2️⃣ Short Videos = Big Impact
Reels, TikToks, Shorts… short-form video is still the king of content. Why? Because nobody wants to read a long paragraph when they can watch a 30-second clip and get the point. This year, focus on snappy, creative videos that make people stop scrolling.

3️⃣ “Hey Alexa, Find Me…” – Voice Search is Rising
More people are talking to their phones and smart speakers than typing into Google. If you’re not optimizing for voice search yet, you’re missing out. Think simple, conversational keywords like you’re answering a friend’s question.

4️⃣ Social Media is the New Mall
Instagram Shops, TikTok Shop, Facebook Marketplace — people are shopping right where they scroll. The quicker you make it for someone to go from “I like this” to “I bought this,” the better your sales will be in 2025.

5️⃣ Personalization or Nothing
Generic ads? Boring. In 2025, it’s all about content that feels made just for me. That means tailored emails, customized product suggestions, and ads that talk directly to your ideal customer.

💡 Final Tip: Digital marketing in 2025 is all about speed, relevance, and connection. The brands that can adapt fast and connect on a personal level will win big.`,
  },
  {
    title: "How Small Businesses Can Compete with Big Brands Online",
    excerpt:
      "Competing with big brands can feel like trying to race a Ferrari with a scooter. But in the digital world, size isn’t everything. With the right strategies, small businesses can grab attention.",
    author: "Alex Johnson",
    date: "Aug 5, 2025",
    readTime: "6 min read",
    content: `Let’s be honest — competing with big brands can feel like trying to race a Ferrari with a scooter. They’ve got huge budgets, big teams, and massive reach. But here’s the good news: in the digital world, size isn’t everything. With the right strategies, small businesses can grab attention, build loyal customers, and even beat the big players in certain areas. Here’s how you can make it happen 👇

1️⃣ Focus on Your Niche
Big brands try to please everyone, but you can focus on a specific audience and serve them better than anyone else. Find your niche, understand their problems, and create content or products that directly solve those problems.

2️⃣ Be Faster & More Personal
Small businesses can respond quicker, customize offers, and connect with customers personally. Reply to comments, send thank-you messages, and remember customer preferences — these little touches make a big difference.

3️⃣ Leverage Social Media Creatively
You don’t need a massive budget to go viral. Short videos, behind-the-scenes posts, customer stories, and trending content can get you huge engagement if done right. Consistency is key here.

4️⃣ Use Local SEO to Your Advantage
If you’re a local business, make sure you’re showing up in Google Maps and “near me” searches. Claim your Google My Business listing, add photos, get reviews, and keep your info updated.

5️⃣ Collaborate Instead of Compete
Partner with other small businesses or local influencers. Collaboration can double your reach without doubling your cost. Think joint giveaways, bundled offers, or co-hosted events.

6️⃣ Build Trust Through Reviews & Testimonials
Big brands rely on their name, but you can build credibility with genuine customer reviews. Showcase them on your website, social media, and even in ads.

💡 Final Word:
Being small is not a weakness — it’s your superpower. You can be more flexible, more creative, and more connected with your audience than big brands ever will. Play to your strengths, stay consistent, and watch your brand grow.`,
  },
];

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative text-left"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close article"
        >
          <FiX size={24} />
        </button>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#232a2f]">
          {post.title}
        </h2>
        <div className="flex items-center text-sm text-[#4e5458] mb-6 space-x-4 border-b pb-4">
          <div className="flex items-center space-x-2">
            <FiUser className="text-[#ffa238]" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiClock className="text-[#ffa238]" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="prose lg:prose-xl max-w-none text-[#4e5458] whitespace-pre-wrap">
          {post.content}
        </div>
      </motion.div>
    </motion.div>
  );
};

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96], // Custom easing curve
      },
    },
  };

  return (
    <>
      <section
        id="blog"
        className="py-24 bg-[#ffffff] text-[#232a2f] relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-[#ffa238]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-72 h-72 bg-[#241d49]/10 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div
          ref={ref}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              Blog &{" "}
              <span className="bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 bg-clip-text text-transparent">
                Updates
              </span>
            </h2>
            <p className="text-xl text-[#4e5458] max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest digital marketing trends, tips, and
              industry insights to grow your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold mb-4 text-[#232a2f] flex-grow">
                  {post.title}
                </h3>
                <p className="text-[#4e5458] mb-6 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm text-[#4e5458] mb-6 space-x-4">
                  <div className="flex items-center space-x-2">
                    <FiUser className="text-[#ffa238]" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="text-[#ffa238]" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center font-semibold text-[#ffa238] group-hover:text-[#232a2f] transition-colors duration-300 text-left"
                >
                  Read More
                  <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPost && (
          <BlogModal
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogSection;
