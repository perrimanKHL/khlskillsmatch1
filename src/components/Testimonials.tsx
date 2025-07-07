import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rojin Ahmed',
    role: 'Kurdish Language Teacher',
    location: 'Camden, London',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    rating: 5,
    text: "This platform has helped me connect with so many people in our community. I've taught Kurdish cooking to over 20 families, and each session feels like bringing our culture closer to the next generation.",
    skillsTaught: ['Kurdish Cooking', 'Traditional Crafts']
  },
  {
    id: 2,
    name: 'Kawa Hassan',
    role: 'Software Developer',
    location: 'Tower Hamlets, London',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
    text: "I've learned traditional music from Shilan and taught web development to several community members. It's amazing how skills flow both ways - I'm not just teaching, I'm learning about my heritage too.",
    skillsTaught: ['Web Development', 'Digital Marketing']
  },
  {
    id: 3,
    name: 'Shilan Omar',
    role: 'Music Teacher & Student',
    location: 'Hackney, London',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
    text: "The connections I've made here go beyond just skill sharing. I've found a community of friends who share the same passion for preserving our Kurdish culture while embracing modern skills.",
    skillsTaught: ['Traditional Music', 'Kurdish Language']
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Community Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community members about their experiences sharing and learning skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-emerald-200" />
                <p className="text-gray-700 italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-600 mb-2">Skills shared:</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.skillsTaught.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Growing Community
            </h3>
            <p className="text-gray-600 mb-6">
              Over 500 Kurdish community members in London are already sharing skills and building connections. 
              Your knowledge could be exactly what someone else is looking for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">1,200+</div>
                <div className="text-gray-600">Skills Shared</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">850+</div>
                <div className="text-gray-600">Successful Connections</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
