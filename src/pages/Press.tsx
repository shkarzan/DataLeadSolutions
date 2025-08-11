import React from 'react';
import { ExternalLink, Download } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: 'QLeadConnect Raises $50M Series B to Accelerate AI-Powered Lead Generation',
      date: 'January 15, 2025',
      excerpt: 'Funding will be used to expand AI capabilities and enter new international markets.',
      link: '#'
    },
    {
      title: 'QLeadConnect Named Leader in Lead Generation Platforms by G2',
      date: 'December 10, 2024',
      excerpt: 'Recognition based on customer satisfaction scores and market presence.',
      link: '#'
    },
    {
      title: 'QLeadConnect Launches Advanced Analytics Dashboard',
      date: 'November 22, 2024',
      excerpt: 'New features provide deeper insights into lead generation performance.',
      link: '#'
    }
  ];

  const mediaKit = [
    { name: 'Company Logo (PNG)', size: '2.1 MB' },
    { name: 'Company Logo (SVG)', size: '156 KB' },
    { name: 'Brand Guidelines', size: '4.8 MB' },
    { name: 'Product Screenshots', size: '12.3 MB' },
    { name: 'Executive Photos', size: '8.7 MB' }
  ];

  const awards = [
    {
      title: 'Best Lead Generation Platform 2024',
      organization: 'SaaS Awards',
      year: '2024'
    },
    {
      title: 'Top 50 SaaS Companies to Watch',
      organization: 'TechCrunch',
      year: '2024'
    },
    {
      title: 'Innovation in Sales Technology',
      organization: 'Sales Tech Awards',
      year: '2023'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Press & Media</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Latest news, press releases, and media resources about QLeadConnect.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Latest Press Releases</h2>
          </div>
          <div className="space-y-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{release.title}</h3>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                    <p className="text-sm text-gray-500">{release.date}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a
                      href={release.link}
                      className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      <span>Read More</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Media Kit</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Download our media kit for logos, brand guidelines, product screenshots, 
                and executive photos for your stories and articles.
              </p>
              <div className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.size}</p>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h2>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600">{award.organization}</p>
                    <p className="text-sm text-gray-500 mt-1">{award.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
          <p className="text-lg text-gray-600 mb-8">
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Press Contact</h3>
                <p className="text-gray-600">Sarah Johnson</p>
                <p className="text-gray-600">VP of Communications</p>
                <p className="text-blue-600">press@qleadconnect.com</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Investor Relations</h3>
                <p className="text-gray-600">Michael Chen</p>
                <p className="text-gray-600">Chief Financial Officer</p>
                <p className="text-blue-600">investors@qleadconnect.com</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;