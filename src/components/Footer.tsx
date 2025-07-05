
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Happy Holidays
            </h3>
            <p className="text-gray-300 mb-4">
              Creating unforgettable travel experiences since 2008. Your trusted partner for all your travel needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-white transition-colors">Travel Packages</Link></li>
              <li><Link to="/settings" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300">📍 Address:</p>
                <p className="text-sm">123 Travel Street, Mumbai, Maharashtra 400001</p>
              </div>
              <div>
                <p className="text-gray-300">📞 Phone:</p>
                <p className="text-sm">+91 7984527433</p>
              </div>
              <div>
                <p className="text-gray-300">✉️ Email:</p>
                <p className="text-sm">info@happyholidays.com</p>
              </div>
              <div>
                <p className="text-gray-300">🕒 Office Hours:</p>
                <p className="text-sm">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Happy Holidays Travel Agency. All rights reserved. | 
            <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-white ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
