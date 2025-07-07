import React from 'react';
import { Search, Users, BookOpen, Star } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Browse Skills',
    description: 'Explore skills offered by Kurdish community members across London or search for something specific.',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'Connect',
    description: 'Message community members directly and arrange a convenient time and place to meet.',
    color: 'bg-green-500'
  },
  {
    icon: BookOpen,
    title: 'Learn Together',
    description: 'Meet in person or virtually to learn new skills while strengthening community bonds.',
    color: 'bg-purple-500'
  },
  {
    icon: Star,
    title: 'Share & Review',
    description: 'Rate your experience and help others discover great teachers in our Kurdish community.',
    color: 'bg-orange-500'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting Kurdish community members across London is simple and completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Kurdish Community
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with hundreds of Kurdish community members across London who are sharing knowledge and building stronger bonds through skill exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Browse Skills
              </button>
              <button className="px-8 py-3 text-blue-600 bg-white border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Share Your Skills
              </button>
            </div>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
              <span className="text-green-600 mr-2">✨</span>
              Always Free for Kurdish Community
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
