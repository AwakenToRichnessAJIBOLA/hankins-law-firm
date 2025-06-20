
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "What to Do After a Car Accident: A Step-by-Step Guide",
    excerpt: "Being involved in a car accident can be overwhelming. Here's what you should do immediately after an accident to protect yourself legally and financially.",
    date: "March 15, 2024",
    category: "Personal Injury",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Understanding Child Custody Laws: What Every Parent Should Know",
    excerpt: "Child custody decisions can be complex and emotional. Learn about the factors courts consider and how to prepare for custody proceedings.",
    date: "March 10, 2024",
    category: "Family Law",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Estate Planning Essentials: Protecting Your Family's Future",
    excerpt: "Don't leave your family's future to chance. Discover the essential documents every estate plan should include and when to update them.",
    date: "March 5, 2024",
    category: "Estate Planning",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Common Mistakes to Avoid in Personal Injury Claims",
    excerpt: "Maximize your personal injury claim by avoiding these common mistakes that could hurt your case and reduce your compensation.",
    date: "February 28, 2024",
    category: "Personal Injury",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "The Divorce Process: What to Expect and How to Prepare",
    excerpt: "Navigate the divorce process with confidence. Learn about the steps involved, required documents, and how to protect your interests.",
    date: "February 20, 2024",
    category: "Family Law",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Business Litigation: When to Fight and When to Settle",
    excerpt: "Making the right decision in business disputes can save time, money, and relationships. Learn when litigation is the best option.",
    date: "February 15, 2024",
    category: "Civil Litigation",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 premium-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-5xl font-bold mb-6">
              Legal Resources & Blog
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Stay informed with the latest legal insights, tips, and updates
              from the experienced attorneys at Hankins Law Firm.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="premium-shadow hover-lift">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold-500 text-navy-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-navy-600 text-sm font-semibold">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-gray-400 text-sm ml-2">
                        {blogPosts[0].date}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <Button className="gold-gradient text-navy-900 font-semibold w-fit">
                      Read Full Article
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-4">
                Recent Articles
              </h2>
              <p className="text-xl text-gray-600">
                Explore our latest legal insights and helpful guides
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="premium-shadow hover-lift bg-white">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-navy-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                    <CardTitle className="text-xl font-bold text-navy-900 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Button variant="outline" className="w-full border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-navy-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for the latest legal insights,
              firm updates, and important legal developments.
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-navy-900"
              />
              <Button className="gold-gradient text-navy-900 font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
