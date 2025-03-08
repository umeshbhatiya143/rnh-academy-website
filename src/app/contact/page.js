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
      <section className="relative h-64 md:h-96 bg-gradient-to-br from-primary to-[#B91C1C] overflow-hidden">
        {/* Background Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-2xl" />
        </motion.div>

        {/* Floating Circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            initial={{ y: 0, x: Math.random() * 100 - 50 }}
            animate={{
              y: [0, 100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-4 px-4 drop-shadow-lg"
          >
            Let&apos;s Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl px-4 mb-8"
          >
            Reach out to us - we&apos;re here to answer your questions
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-8"
          >
            <div className="animate-bounce w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
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
                className="w-full bg-gradient-to-r from-primary to-[#B91C1C] text-white py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-primary/30 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/5 transition-colors" />
              </button>
            </form>

          </motion.div>

          {/*  Modified Google Maps Section */}
          {/* Modified Google Maps Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-96 md:h-[600px] rounded-2xl shadow-xl overflow-hidden border border-gray-100"
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

        {/* Contact Details Card - Now properly aligned */}
        <div className=" mt-10 md:col-span-2"> {/* Spans full width on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto p-8 bg-gray-50 rounded-2xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-serif text-primary mb-6 text-center">
              Direct Contact
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div className="space-y-3">
                <div className="text-gray-700">
                  <span className="block font-medium mb-1">📍 Address</span>
                  Near Jail Road, Danopur<br />
                  Uttar Pradesh - 274001
                </div>
                <div className="text-gray-700">
                  <span className="block font-medium mb-1">📞 Phone</span>
                  Admissions: +91 96958 99410<br />
                  General: +91 98765 43210
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-gray-700">
                  <span className="block font-medium mb-1">✉️ Email</span>
                  admissions@rnhacademy.com<br />
                  info@rnhacademy.com
                </div>
                <div className="text-gray-700">
                  <span className="block font-medium mb-1">⏰ Office Hours</span>
                  Mon-Sat: 8AM - 5PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}