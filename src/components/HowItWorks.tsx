import React from 'react';
import { UserPlus, Search, MessageCircle, BookOpen } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Join Our Community',
    description: 'Create your free account and tell us about your skills and interests',
    color: 'bg-emerald-500'
  },
  {
    icon: Search,
    title: 'Find Skills & People',
    description: 'Browse skills you want to learn or find people who want to learn from you',
    color: 'bg-blue-500'
  },
  {
    icon: MessageCircle,
    title: 'Connect & Arrange',
    description: 'Message each other to arrange meeting times and locations that work for both',
    color: 'bg-purple-500'
  },
  {
    icon: BookOpen,
    title: 'Learn & Teach',
    description: 'Meet up to share knowledge, build friendships, and strengthen our community',
    color: 'bg-orange-500'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Join our community and start sharing knowledge today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-emerald-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Kurdish House London Skills Share?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🏠 Community Focused</h4>
                <p className="text-gray-600 text-sm">
                  Built specifically for the Kurdish community in London to preserve culture and build connections.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💝 Completely Free</h4>
                <p className="text-gray-600 text-sm">
                  No hidden fees, no subscriptions. Knowledge sharing should be accessible to everyone.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🤝 Safe & Trusted</h4>
                <p className="text-gray-600 text-sm">
                  Community-moderated platform with verified members and transparent reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
