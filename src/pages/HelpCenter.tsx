import React from 'react';
import { Search, Book, MessageCircle, Video, FileText, Users } from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of QLeadConnect',
      articles: 12
    },
    {
      icon: Users,
      title: 'Lead Management',
      description: 'Manage and organize your leads',
      articles: 18
    },
    {
      icon: MessageCircle,
      title: 'Campaigns',
      description: 'Create and manage campaigns',
      articles: 15
    },
    {
      icon: Video,
      title: 'Integrations',
      description: 'Connect with other tools',
      articles: 22
    },
    {
      icon: FileText,
      title: 'Reports & Analytics',
      description: 'Track your performance',
      articles: 9
    },
    {
      icon: Search,
      title: 'API Documentation',
      description: 'Developer resources',
      articles: 25
    }
  ];

  const popularArticles = [
    'How to set up your first lead generation campaign',
    'Integrating QLeadConnect with your CRM',
    'Understanding lead scoring and qualification',
    'Best practices for email outreach',
    'Setting up automated follow-up sequences',
    'Analyzing campaign performance metrics'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Find answers to your questions and learn how to get the most out of QLeadConnect.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-blue-600 font-medium">{category.articles} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-medium text-gray-900 hover:text-blue-600">{article}</h3>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Need More Help?</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Support</h3>
                  <p className="text-gray-600 mb-4">
                    Can't find what you're looking for? Our support team is here to help.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Contact Support
                  </button>
                </div>
                
                <div className="bg-green-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">
                    Get instant help from our support team during business hours.
                  </p>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    Start Chat
                  </button>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                  <p className="text-gray-600 mb-4">
                    Watch step-by-step video guides to master QLeadConnect features.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    Watch Videos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;