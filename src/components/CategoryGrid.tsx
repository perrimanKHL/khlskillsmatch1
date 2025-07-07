import React from 'react';
import { ChefHat, Wrench, DollarSign, Flower, Laptop, Palette, Heart, MessageCircle, Leaf, Scale, FileText, Briefcase } from 'lucide-react';
import { categories } from '../data/mockData';

const iconMap = {
  ChefHat,
  Wrench,
  DollarSign,
  Flower,
  Laptop,
  Palette,
  Heart,
  MessageCircle,
  Leaf,
  Scale,
  FileText,
  Briefcase,
};

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Skill Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of practical life skills taught by experienced community members - from traditional crafts to cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                className="group cursor-pointer bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200"
              >
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {category.skillCount} skills available
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 text-blue-600 bg-blue-50 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
