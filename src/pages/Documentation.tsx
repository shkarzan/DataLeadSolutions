import React from 'react';
import { Book, Code, Zap, Shield, ArrowRight } from 'lucide-react';

const Documentation = () => {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guide and basic concepts',
      links: [
        'Installation & Setup',
        'Authentication',
        'Making Your First Request',
        'Error Handling'
      ]
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete API documentation',
      links: [
        'Leads API',
        'Campaigns API',
        'Contacts API',
        'Analytics API'
      ]
    },
    {
      icon: Zap,
      title: 'Webhooks',
      description: 'Real-time event notifications',
      links: [
        'Setting Up Webhooks',
        'Event Types',
        'Webhook Security',
        'Testing Webhooks'
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Authentication and security best practices',
      links: [
        'API Keys',
        'OAuth 2.0',
        'Rate Limiting',
        'IP Whitelisting'
      ]
    }
  ];

  const codeExample = `// Initialize the QLeadConnect client
const client = new QLeadConnect({
  apiKey: 'your-api-key',
  baseURL: 'https://api.qleadconnect.com/v1'
});

// Create a new lead
const lead = await client.leads.create({
  email: 'john@example.com',
  name: 'John Doe',
  company: 'Acme Corp',
  source: 'website'
});

console.log('Lead created:', lead.id);`;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Everything you need to integrate QLeadConnect into your applications 
            and workflows.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Get up and running with QLeadConnect API in just a few minutes. 
                Follow our step-by-step guide to make your first API call.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    1
                  </div>
                  <span className="text-gray-700">Sign up and get your API key</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    2
                  </div>
                  <span className="text-gray-700">Install our SDK or use direct HTTP calls</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                    3
                  </div>
                  <span className="text-gray-700">Make your first API request</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">{codeExample}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Our Documentation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors group"
                    >
                      <span>{link}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Official SDKs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our official SDKs to integrate QLeadConnect with your favorite programming language.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['JavaScript', 'Python', 'PHP', 'Ruby', 'Go', 'Java', 'C#', 'Swift'].map((language, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors cursor-pointer">
                <h3 className="font-semibold text-gray-900 mb-2">{language}</h3>
                <p className="text-sm text-gray-600">Official SDK</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our developer support team is here to help you integrate successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;