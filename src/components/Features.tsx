import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    'Advanced lead scoring and qualification',
    'Real-time data enrichment',
    'Multi-channel outreach campaigns',
    'CRM integration and sync',
    'Automated follow-up sequences',
    'Performance tracking and analytics',
    'Team collaboration tools',
    'Mobile app access'
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose QLeadConnect?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our platform combines cutting-edge technology with proven sales methodologies 
              to deliver exceptional results for businesses of all sizes.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 left-8 w-full h-full bg-blue-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;