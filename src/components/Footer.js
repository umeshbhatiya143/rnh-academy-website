'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>123, R.N.H Academy Road,<br />City Name, State, PIN</p>
          <p className="mt-2">Email: info@rnhaacademy.com</p>
          <p className="mt-2">Phone: +91 12345 67890</p>
          <div className="mt-4">
            <Image
              src="/images/map-placeholder.png" // Replace with your mini Google Map embed screenshot
              alt="Map"
              width={250}
              height={150}
              className="rounded"
            />
          </div>
        </div>
        {/* Quick Links Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2"><a href="/admissions" className="hover:text-primary">Admissions</a></li>
            <li className="mb-2"><a href="/fee-structure" className="hover:text-primary">Fee Structure</a></li>
            <li className="mb-2"><a href="/gallery" className="hover:text-primary">Gallery</a></li>
          </ul>
        </div>
        {/* Social Media Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Twitter</a>
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">WhatsApp</a>
          </div>
          <div className="mt-4">
            {/* You could embed a Facebook feed widget here */}
            <p className="text-sm">Facebook Feed Widget</p>
          </div>
        </div>
        {/* Newsletter Column */}
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="mb-4">Get updates on our latest news and events.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l focus:outline-none text-gray-800"
            />
            <button className="px-4 py-2 bg-primary text-white rounded-r hover:bg-red-600 transition-colors">
              Subscribe
            </button>
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
