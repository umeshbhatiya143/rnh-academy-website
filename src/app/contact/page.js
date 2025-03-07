// app/contact/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    queryType: 'general'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      // Hero Section
      <section className="relative h-64 md:h-96 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-2xl" />
        </motion.div>

        {/* Floating Circles Animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: Math.random() * 100 - 50 }}
            animate={{ y: [0, 100, 0], x: [0, Math.random() * 50 - 25, 0] }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-4 px-4"
          >
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl px-4"
          >
            Reach out to us - we're here to answer your questions and guide you through every step
          </motion.p>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8 flex flex-col items-center"
          >
            <div className="animate-bounce w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
              <ChevronDownIcon className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-serif text-primary mb-8 text-center pb-4 border-b border-gray-200">
              Get in Touch
            </h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-800 font-medium text-lg">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium text-lg">Contact Number</label>
                <input
                  type="tel"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-400"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-800 font-medium text-lg">Nature of Inquiry</label>
                <select
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzNzQxNTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]"
                  value={formData.queryType}
                  onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                >
                  <option value="general">General Inquiry</option>
                  <option value="admissions">Admissions</option>
                  <option value="feedback">Feedback/Suggestions</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-dark text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg text-lg"
              >
                Send Message
              </button>
            </form>

            {/* Contact Details Card */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-serif text-primary mb-4">Direct Contact</h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  📍 Near Jail Road, Danopur<br />
                  Uttar Pradesh - 274001
                </p>
                <p className="text-gray-700">
                  📞 Admissions: +91 96958 99410<br />
                  General: +91 98765 43210
                </p>
                <p className="text-gray-700">
                  ✉️ admissions@rnhacademy.com<br />
                  info@rnhacademy.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-[800px] rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d114279.0401255325!2d83.70639651240022!3d26.480860350738435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3993c55e1cdcb3b9%3A0x37a90d21cb3c9451!2sJail%20Road%2C%20Near%2C%20Salempur%20Rd%2C%20Danopur%2C%20Uttar%20Pradesh%20274001!3m2!1d26.480884!2d83.788798!5e0!3m2!1sen!2sin!4v1741389750606!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}