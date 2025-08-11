import React from 'react';
import { Target, Users, BarChart3, Zap, Shield, Headphones, Search, Mail, Phone, Calendar, Database, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Advanced Lead Scoring',
      description: 'AI-powered lead scoring to identify your most promising prospects automatically.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Comprehensive contact database with enriched profiles and interaction history.',
      color: 'text-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Detailed insights into your lead generation performance and conversion rates.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and create sophisticated nurturing sequences.',
      color: 'text-purple-600'
    },
    {
      icon: Search,
      title: 'Prospect Discovery',
      description: 'Find new prospects using advanced search filters and AI recommendations.',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Campaigns',
      description: 'Create and send personalized email campaigns with advanced tracking.',
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'Call Management',
      description: 'Integrated calling system with call recording and performance tracking.',
      color: 'text-indigo-600'
    },
    {
      icon: Calendar,
      title: 'Meeting Scheduler',
      description: 'Automated meeting scheduling with calendar integration and reminders.',
      color: 'text-pink-600'
    },
    {
      icon: Database,
      title: 'Data Enrichment',
      description: 'Automatically enrich contact profiles with social and company data.',
      color: 'text-yellow-600'
    },
    {
      icon: Globe,
      title: 'Multi-channel Outreach',
      description: 'Reach prospects across email, social media, and phone in coordinated campaigns.',
      color: 'text-cyan-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and data encryption.',
      color: 'text-gray-600'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 customer support with dedicated success managers for Enterprise plans.',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Powerful Features</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Everything you need to generate, nurture, and convert leads into customers. 
            Our comprehensive platform puts all the tools at your fingertips.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect QLeadConnect with your existing tools and workflows. 
              We integrate with over 100+ popular business applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Salesforce', 'HubSpot', 'Pipedrive', 'Slack', 'Zapier', 'Gmail', 'Outlook', 'LinkedIn', 'Zoom', 'Calendly', 'Mailchimp', 'Intercom'].map((integration, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <div className="text-gray-700 font-medium">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;