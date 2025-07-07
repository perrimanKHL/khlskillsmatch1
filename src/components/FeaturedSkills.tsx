import React, { useState, useEffect } from 'react';
import { Star, MapPin, Clock, User } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type SkillListing = Database['public']['Tables']['skill_listings']['Row'] & {
  skills: Database['public']['Tables']['skills']['Row'];
  profiles: Database['public']['Tables']['profiles']['Row'];
};

export default function FeaturedSkills() {
  const [skillListings, setSkillListings] = useState<SkillListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkillListings();
  }, []);

  const fetchSkillListings = async () => {
    try {
      const { data, error } = await supabase
        .from('skill_listings')
        .select(`
          *,
          skills (
            id,
            name,
            category,
            description
          ),
          profiles (
            id,
            full_name,
            avatar_url,
            location
          )
        `)
        .eq('is_active', true)
        .limit(6);

      if (error) {
        console.error('Error fetching skill listings:', error);
      } else {
        setSkillListings(data as SkillListing[]);
      }
    } catch (error) {
      console.error('Error fetching skill listings:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fallback data for when no real data is available
  const fallbackSkills = [
    {
      id: '1',
      user: {
        name: 'Rojin Ahmed',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
        location: 'Camden, London',
        rating: 4.9,
        reviewCount: 23
      },
      skill: {
        name: 'Kurdish Cooking',
        category: 'Traditional Skills',
        description: 'Learn authentic Kurdish recipes including dolma, kebab, and traditional breads',
        level: 'intermediate' as const,
        duration: '2-3 hours'
      },
      type: 'offering' as const,
      availability: ['Weekends', 'Evenings'],
      tags: ['Traditional', 'Food', 'Culture']
    },
    {
      id: '2',
      user: {
        name: 'Kawa Hassan',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        location: 'Tower Hamlets, London',
        rating: 4.8,
        reviewCount: 31
      },
      skill: {
        name: 'Web Development',
        category: 'Technology',
        description: 'Full-stack development with React, Node.js, and modern frameworks',
        level: 'advanced' as const,
        duration: '4-6 hours'
      },
      type: 'offering' as const,
      availability: ['Weekdays', 'Evenings'],
      tags: ['React', 'JavaScript', 'Programming']
    },
    {
      id: '3',
      user: {
        name: 'Shilan Omar',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        location: 'Hackney, London',
        rating: 5.0,
        reviewCount: 18
      },
      skill: {
        name: 'Traditional Music',
        category: 'Traditional Skills',
        description: 'Learn to play traditional Kurdish instruments and folk songs',
        level: 'beginner' as const,
        duration: '1-2 hours'
      },
      type: 'offering' as const,
      availability: ['Weekends'],
      tags: ['Music', 'Culture', 'Instruments']
    },
    {
      id: '4',
      user: {
        name: 'Aram Mahmud',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        location: 'Southwark, London',
        rating: 4.7,
        reviewCount: 42
      },
      skill: {
        name: 'Digital Marketing',
        category: 'Business & Career',
        description: 'Social media strategy, content creation, and online brand building',
        level: 'intermediate' as const,
        duration: '3-4 hours'
      },
      type: 'offering' as const,
      availability: ['Flexible'],
      tags: ['Marketing', 'Social Media', 'Business']
    },
    {
      id: '5',
      user: {
        name: 'Berivan Salih',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        location: 'Islington, London',
        rating: 4.9,
        reviewCount: 27
      },
      skill: {
        name: 'Yoga & Meditation',
        category: 'Health & Wellness',
        description: 'Hatha yoga, mindfulness meditation, and stress reduction techniques',
        level: 'beginner' as const,
        duration: '1-2 hours'
      },
      type: 'offering' as const,
      availability: ['Mornings', 'Weekends'],
      tags: ['Wellness', 'Mindfulness', 'Health']
    },
    {
      id: '6',
      user: {
        name: 'Diyar Rashid',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        location: 'Greenwich, London',
        rating: 4.8,
        reviewCount: 35
      },
      skill: {
        name: 'Photography',
        category: 'Creative Arts',
        description: 'Portrait photography, lighting techniques, and photo editing',
        level: 'intermediate' as const,
        duration: '2-3 hours'
      },
      type: 'offering' as const,
      availability: ['Weekends', 'Evenings'],
      tags: ['Photography', 'Creative', 'Art']
    }
  ];

  const displaySkills = skillListings.length > 0 ? skillListings.map(listing => ({
    id: listing.id,
    user: {
      name: listing.profiles.full_name,
      avatar: listing.profiles.avatar_url || 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      location: listing.profiles.location || 'London',
      rating: 4.8,
      reviewCount: Math.floor(Math.random() * 50) + 10
    },
    skill: {
      name: listing.skills.name,
      category: listing.skills.category,
      description: listing.skills.description || '',
      level: listing.level,
      duration: '2-3 hours'
    },
    type: listing.type,
    availability: listing.availability,
    tags: listing.tags
  })) : fallbackSkills;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
                <div className="h-4 bg-gray-200 rounded mb-4"></div>
                <div className="h-20 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with skilled community members ready to share their knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displaySkills.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.user.avatar}
                      alt={item.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.user.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.user.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">
                      {item.user.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({item.user.reviewCount})
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {item.skill.name}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.skill.level)}`}>
                      {item.skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.skill.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.skill.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Available: {item.availability.join(', ')}
                  </div>
                  <span className="text-lg font-bold text-emerald-600">FREE</span>
                </div>

                <button className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
            View All Skills
          </button>
        </div>
      </div>
    </section>
  );
}
