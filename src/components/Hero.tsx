import React from 'react';
import { ArrowRight, Users, BookOpen, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Kurdish House London
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Skills Share
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Connect with Kurdish community members across London to learn and share practical life skills. 
              From traditional cooking to sustainable science and AI - strengthen our community through knowledge sharing.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Find Skills to Learn
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all duration-200">
                Share Your Skills
              </button>
            </div>

            {/* Free Badge */}
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
              <span className="text-green-600 mr-2">✨</span>
              Completely Free for Kurdish Community
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">1,200+</span>
                </div>
                <p className="text-gray-600 mt-1">Community Members</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <BookOpen className="h-6 w-6 text-purple-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">950+</span>
                </div>
                <p className="text-gray-600 mt-1">Skills Shared</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-gray-600 mt-1">Community Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Kurdish community members learning together"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-semibold">🍳</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">Kurdish Cooking</p>
                  <p className="text-sm text-gray-500">Free • North London</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">🤖</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">AI & Tech Skills</p>
                  <p className="text-sm text-gray-500">4.9 ⭐ (24 reviews)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
