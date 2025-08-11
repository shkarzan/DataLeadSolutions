import React from 'react';
import { Target, Users, BarChart3, Zap, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Generate high-quality leads with our advanced targeting and filtering systems.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Organize and manage your contacts with our intuitive CRM integration.',
      color: 'text-teal-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reports',
      description: 'Track your performance with detailed analytics and comprehensive reports.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Automate your outreach campaigns and follow-up sequences.',
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to keep your data safe and compliant.',
      color: 'text-green-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you succeed.',
      color: 'text-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Lead Generation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform prospects into customers. Our platform provides 
            all the tools and support you need to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;