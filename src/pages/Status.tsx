import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react';

const Status = () => {
  const services = [
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.99%'
    },
    {
      name: 'Web Application',
      status: 'operational',
      uptime: '99.98%'
    },
    {
      name: 'Email Delivery',
      status: 'operational',
      uptime: '99.97%'
    },
    {
      name: 'Data Processing',
      status: 'operational',
      uptime: '99.95%'
    },
    {
      name: 'Integrations',
      status: 'maintenance',
      uptime: '99.92%'
    },
    {
      name: 'Mobile App',
      status: 'operational',
      uptime: '99.96%'
    }
  ];

  const incidents = [
    {
      title: 'Scheduled Maintenance - Integration Services',
      status: 'scheduled',
      date: 'January 20, 2025',
      time: '02:00 - 04:00 UTC',
      description: 'We will be performing scheduled maintenance on our integration services.'
    },
    {
      title: 'API Response Time Degradation',
      status: 'resolved',
      date: 'January 15, 2025',
      time: '14:30 - 15:45 UTC',
      description: 'Some users experienced slower API response times. Issue has been resolved.'
    },
    {
      title: 'Email Delivery Delays',
      status: 'resolved',
      date: 'January 10, 2025',
      time: '09:15 - 10:30 UTC',
      description: 'Email notifications were delayed due to a third-party service issue.'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'maintenance':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'degraded':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'outage':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'scheduled':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'maintenance':
        return 'Maintenance';
      case 'degraded':
        return 'Degraded Performance';
      case 'outage':
        return 'Outage';
      case 'scheduled':
        return 'Scheduled';
      case 'resolved':
        return 'Resolved';
      default:
        return 'Operational';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600';
      case 'maintenance':
        return 'text-yellow-600';
      case 'degraded':
        return 'text-orange-600';
      case 'outage':
        return 'text-red-600';
      case 'scheduled':
        return 'text-blue-600';
      case 'resolved':
        return 'text-green-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">System Status</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Real-time status and uptime information for all QLeadConnect services.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="h-8 w-8 text-green-500" />
            <h2 className="text-2xl font-bold text-green-800">All Systems Operational</h2>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Status</h2>
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(service.status)}
                    <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  </div>
                  <div className="flex items-center space-x-6">
                    <span className={`font-medium ${getStatusColor(service.status)}`}>
                      {getStatusText(service.status)}
                    </span>
                    <span className="text-gray-600">
                      {service.uptime} uptime
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start space-x-3">
                  {getStatusIcon(incident.status)}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{incident.title}</h3>
                    <p className="text-gray-600 mb-2">{incident.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{incident.date}</span>
                      <span>{incident.time}</span>
                      <span className={`font-medium ${getStatusColor(incident.status)}`}>
                        {getStatusText(incident.status)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Stay Informed</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to status updates and get notified about incidents and maintenance windows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;