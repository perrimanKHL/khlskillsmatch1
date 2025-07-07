import React from 'react';
import { 
  ChefHat, 
  Palette, 
  Code, 
  Heart, 
  Briefcase, 
  Languages, 
  Music,
  Leaf,
  Scale,
  Brain
} from 'lucide-react';

const categories = [
  {
    id: 'traditional',
    name: 'Traditional Skills',
    icon: Music,
    color: 'bg-red-500',
    skillCount: 12,
    description: 'Kurdish culture, music, and heritage'
  },
  {
    id: 'life-skills',
    name: 'Life Skills',
    icon: ChefHat,
    color: 'bg-orange-500',
    skillCount: 18,
    description: 'Cooking, organization, and daily life'
  },
  {
    id: 'creative',
    name: 'Creative Arts',
    icon: Palette,
    color: 'bg-purple-500',
    skillCount: 15,
    description: 'Art, design, and creative expression'
  },
  {
    id: 'technology',
    name: 'Technology',
    icon: Code,
    color: 'bg-blue-500',
    skillCount: 22,
    description: 'Programming, apps, and digital skills'
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    icon: Heart,
    color: 'bg-pink-500',
    skillCount: 14,
    description: 'Fitness, nutrition, and mental health'
  },
  {
    id: 'business',
    name: 'Business & Career',
    icon: Briefcase,
    color: 'bg-indigo-500',
    skillCount: 16,
    description: 'Professional development and leadership'
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Languages,
    color: 'bg-green-500',
    skillCount: 8,
    description: 'Kurdish, English, Arabic, and more'
  },
  {
    id: 'sustainable-science',
    name: 'Sustainable Science',
    icon: Leaf,
    color: 'bg-emerald-500',
    skillCount: 10,
    description: 'Environmental science and sustainability'
  },
  {
    id: 'policy-law',
    name: 'Policy & Law',
    icon: Scale,
    color: 'bg-amber-500',
    skillCount: 9,
    description: 'Legal knowledge and policy advocacy'
  },
  {
    id: 'tech-ai',
    name: 'Tech & AI',
    icon: Brain,
    color: 'bg-cyan-500',
    skillCount: 13,
    description: 'AI, machine learning, and advanced tech'
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore Skill Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a wide range of skills shared by our Kurdish community members across London
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-emerald-300"
              >
                <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-emerald-600">
                    {category.skillCount} skills
                  </span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    FREE
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
