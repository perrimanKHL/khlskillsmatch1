import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rojin Ahmed',
    role: 'Kurdish Cooking Teacher',
    location: 'North London',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Kurdish House London Skills Share has allowed me to share my grandmother's recipes with our community. I've taught over 50 families how to make traditional Kurdish dishes. It's beautiful to see our culture being preserved and passed on.",
  },
  {
    id: 2,
    name: 'Aram Mahmud',
    role: 'AI & Technology Instructor',
    location: 'South London',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Teaching AI and technology skills to our Kurdish community has been incredibly rewarding. I've helped over 30 people learn programming and AI basics. The platform makes it so easy to connect with learners who are genuinely excited to grow.",
  },
  {
    id: 3,
    name: 'Lavin Kareem',
    role: 'Legal Rights Advocate',
    location: 'West London',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: "Providing legal guidance to Kurdish families through this platform has been life-changing. I've helped dozens of community members understand their rights and navigate UK systems. The free platform removes all barriers to accessing crucial legal knowledge.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Community Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from Kurdish community members who are making a difference through skill sharing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 text-green-800 rounded-full font-semibold">
            <span className="text-green-600 mr-2">✨</span>
            Join 1,200+ Kurdish community members sharing skills for free
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
