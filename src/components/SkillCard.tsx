import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { SkillListing } from '../types';

interface SkillCardProps {
  listing: SkillListing;
}

const SkillCard: React.FC<SkillCardProps> = ({ listing }) => {
  const { user, skill } = listing;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 group">
      {/* User Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3 flex-1">
            <h3 className="font-semibold text-gray-900">{user.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {user.location}
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium text-gray-900">{user.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({user.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Skill Content */}
      <div className="px-6 pb-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full mb-2">
            {skill.category}
          </span>
          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {skill.name}
          </h4>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {skill.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {skill.duration}
          </div>
          <div className="flex items-center">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              skill.level === 'beginner' ? 'bg-green-100 text-green-700' :
              skill.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {skill.level}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-lg font-bold text-green-600">
            <span className="text-green-600">FREE</span>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Connect
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {listing.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs text-gray-600 bg-gray-100 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
