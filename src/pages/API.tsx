import React from 'react';
import { Code, Key, Zap, Shield } from 'lucide-react';

const API = () => {
  const endpoints = [
    {
      method: 'GET',
      endpoint: '/api/v1/leads',
      description: 'Retrieve all leads with optional filtering and pagination'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/leads',
      description: 'Create a new lead in your database'
    },
    {
      method: 'PUT',
      endpoint: '/api/v1/leads/{id}',
      description: 'Update an existing lead by ID'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/leads/{id}',
      description: 'Delete a lead from your database'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/campaigns',
      description: 'Get all your marketing campaigns'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/campaigns',
      description: 'Create a new marketing campaign'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Developer API</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Build powerful integrations with our comprehensive RESTful API. 
            Access all QLeadConnect features programmatically.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">RESTful API</h3>
              <p className="text-gray-600">Clean, intuitive REST endpoints with JSON responses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">API Keys</h3>
              <p className="text-gray-600">Secure authentication with API keys and OAuth 2.0</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Webhooks</h3>
              <p className="text-gray-600">Real-time notifications for important events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rate Limiting</h3>
              <p className="text-gray-600">Fair usage policies with generous rate limits</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive API endpoints to integrate QLeadConnect into your applications.
            </p>
          </div>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <code className="text-gray-900 font-mono">{endpoint.endpoint}</code>
                </div>
                <p className="text-gray-600 mt-2">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Getting Started
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Start building with our API in minutes. Here's a simple example 
                of how to fetch leads using our REST API.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">1. Get your API key</h3>
                  <p className="text-gray-600">Sign up and get your API key from the dashboard</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2. Make your first request</h3>
                  <p className="text-gray-600">Use the example code to fetch your leads</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3. Build your integration</h3>
                  <p className="text-gray-600">Explore our documentation for advanced features</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="text-gray-400 mb-4">// Fetch leads using JavaScript</div>
                <div className="text-blue-400">const</div> <span className="text-white">response</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">fetch</span>(<span className="text-green-300">'https://api.qleadconnect.com/v1/leads'</span>, {'{'}
                <div className="ml-4">
                  <span className="text-white">headers:</span> {'{'}
                  <div className="ml-4">
                    <span className="text-green-300">'Authorization'</span>: <span className="text-green-300">'Bearer YOUR_API_KEY'</span>,
                  </div>
                  <div className="ml-4">
                    <span className="text-green-300">'Content-Type'</span>: <span className="text-green-300">'application/json'</span>
                  </div>
                  {'}'}
                </div>
                {'}'});
                <br />
                <div className="text-blue-400">const</div> <span className="text-white">data</span> = <span className="text-blue-400">await</span> <span className="text-white">response</span>.<span className="text-yellow-400">json</span>();
                <div className="text-yellow-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-white">data</span>);
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;