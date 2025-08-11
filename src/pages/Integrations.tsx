import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Integrations = () => {
  const integrations = [
    {
      category: 'CRM Systems',
      tools: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'Freshsales']
    },
    {
      category: 'Email Marketing',
      tools: ['Mailchimp', 'Constant Contact', 'Campaign Monitor', 'SendGrid', 'Klaviyo', 'ConvertKit']
    },
    {
      category: 'Communication',
      tools: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom', 'Google Meet', 'Skype']
    },
    {
      category: 'Productivity',
      tools: ['Zapier', 'Google Workspace', 'Microsoft 365', 'Notion', 'Trello', 'Asana']
    },
    {
      category: 'Analytics',
      tools: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Hotjar', 'Fullstory']
    },
    {
      category: 'Social Media',
      tools: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube', 'TikTok']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Powerful Integrations</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Connect QLeadConnect with your favorite tools and streamline your workflow. 
            We integrate with 100+ popular business applications.
          </p>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Integrations with Our API
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Need a custom integration? Our RESTful API makes it easy to connect 
                QLeadConnect with any system or build custom workflows.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">RESTful API with comprehensive documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Webhooks for real-time data sync</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Rate limiting and authentication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">SDKs for popular programming languages</span>
                </li>
              </ul>
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2">
                <span>View API Documentation</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
                <div className="mb-4">
                  <span className="text-blue-400">GET</span> /api/v1/leads
                </div>
                <div className="text-gray-400">
                  {`{
  "leads": [
    {
      "id": "lead_123",
      "email": "john@example.com",
      "name": "John Doe",
      "company": "Acme Corp",
      "score": 85,
      "status": "qualified"
    }
  ],
  "total": 1,
  "page": 1
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;