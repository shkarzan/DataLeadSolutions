import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: '10 Lead Generation Strategies That Actually Work in 2025',
      excerpt: 'Discover the most effective lead generation tactics that top-performing sales teams are using to drive growth.',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      category: 'Strategy'
    },
    {
      title: 'How AI is Revolutionizing Sales Prospecting',
      excerpt: 'Learn how artificial intelligence is transforming the way businesses identify and qualify potential customers.',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      category: 'Technology'
    },
    {
      title: 'Building a High-Converting Sales Funnel',
      excerpt: 'Step-by-step guide to creating sales funnels that convert prospects into paying customers.',
      author: 'Emily Rodriguez',
      date: 'January 10, 2025',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      category: 'Sales'
    },
    {
      title: 'The Future of B2B Lead Generation',
      excerpt: 'Explore emerging trends and technologies that will shape the future of B2B lead generation.',
      author: 'David Kim',
      date: 'January 8, 2025',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      category: 'Trends'
    },
    {
      title: 'Email Marketing Best Practices for Lead Nurturing',
      excerpt: 'Master the art of email marketing to nurture leads and guide them through your sales funnel.',
      author: 'Lisa Wang',
      date: 'January 5, 2025',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      category: 'Marketing'
    },
    {
      title: 'Data-Driven Sales: Using Analytics to Close More Deals',
      excerpt: 'Harness the power of data analytics to optimize your sales process and improve conversion rates.',
      author: 'Robert Taylor',
      date: 'January 3, 2025',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      category: 'Analytics'
    }
  ];

  const categories = ['All', 'Strategy', 'Technology', 'Sales', 'Marketing', 'Analytics', 'Trends'];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">QLeadConnect Blog</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Insights, strategies, and best practices for modern lead generation 
            and sales success.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <button className="group flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter and get the latest insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;