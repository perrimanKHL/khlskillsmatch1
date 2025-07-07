import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KH</span>
              </div>
              <span className="ml-2 text-xl font-bold">Kurdish House London Skills Share</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Connecting Kurdish community members across London to learn and share practical life skills. 
              Building stronger communities through knowledge sharing - completely free for all Kurdish families.
            </p>
            <div className="flex items-center text-green-400">
              <Heart className="h-5 w-5 mr-2" />
              <span className="font-semibold">Made with love for the Kurdish community</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Find Skills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Share Skills</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>hello@kurdishhouseskills.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+44 20 7946 0958</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>London, UK</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Kurdish House London Skills Share. Made with ❤️ for the Kurdish community.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Community Guidelines</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
