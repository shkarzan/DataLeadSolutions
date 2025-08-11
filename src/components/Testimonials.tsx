import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Sales Director',
      company: 'TechCorp Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      content: 'QLeadConnect transformed our sales process. We\'ve increased our qualified leads by 300% and closed 40% more deals.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager',
      company: 'Growth Dynamics',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      content: 'The automation features saved us 20 hours per week, and the analytics helped us optimize our campaigns for better ROI.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'CEO',
      company: 'StartupXY',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      content: 'As a startup, we needed a cost-effective solution that could scale. QLeadConnect delivered beyond our expectations.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. See how businesses like yours are 
            achieving remarkable results with QLeadConnect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;