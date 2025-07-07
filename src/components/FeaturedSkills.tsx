import React from 'react';
import { MapPin, Clock, Star, Users } from 'lucide-react';
import { skillListings } from '../data/mockData';

const FeaturedSkills = () => {
  const featuredSkills = skillListings.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Popular skills being shared by our Kurdish community members across London
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSkills.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {listing.skill.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {listing.skill.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <img
                    src={listing.user.avatar}
                    alt={listing.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{listing.user.name}</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {listing.user.rating} ({listing.user.reviewCount} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {listing.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {listing.skill.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600 font-semibold">
                    <span className="text-lg">FREE</span>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 text-blue-600 bg-blue-50 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
            View All Skills
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;
