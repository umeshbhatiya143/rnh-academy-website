'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Replace with your subscription logic
    console.log('Subscribed email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>
            123, R.N.H Academy Road,
            <br />
            City Name, State, PIN
          </p>
          <p className="mt-2">Email: info@rnhaacademy.com</p>
          <p className="mt-2">Phone: +91 12345 67890</p>
        </div>
        {/* Quick Links Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
          <li className="mb-2">
              <a href="/academics" className="hover:text-primary">
                Academics
              </a>
            </li>
            <li className="mb-2">
              <a href="/admissions" className="hover:text-primary">
                Admissions
              </a>
            </li>
            <li className="mb-2">
              <a href="/admissions" className="hover:text-primary">
                Fee Structure
              </a>
            </li>
            <li className="mb-2">
              <a href="/facilities" className="hover:text-primary">
                Facilities
              </a>
            </li>
            <li className="mb-2">
              <a href="/gallery" className="hover:text-primary">
                Gallery
              </a>
            </li>
          </ul>
        </div>
        {/* Social Media Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-primary">
              Facebook
            </a>
            <a href="#" className="hover:text-primary">
              Twitter
            </a>
            <a href="#" className="hover:text-primary">
              Instagram
            </a>
            <a href="#" className="hover:text-primary">
              WhatsApp
            </a>
          </div>
          <div className="mt-4">
            {/* Optional: Embed Facebook feed widget */}
            <p className="text-sm">Facebook Feed Widget</p>
          </div>
        </div>
        {/* Newsletter Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="mb-4 text-gray-300 text-sm">
            Get updates on our latest news and events.
          </p>
          <div className="bg-gray-700 rounded-xl shadow-lg max-w-md mx-auto p-4">
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-gray-600 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-400 text-white font-bold rounded-full shadow-lg transition-colors hover:from-red-700 hover:to-red-500"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          R.N.H Academy © 2025 | Est. 2017
        </p>
      </div>
    </footer>
  );
}
