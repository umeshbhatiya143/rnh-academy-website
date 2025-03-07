'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ClassUpgradationBanner() {
  return (
    <section className="relative bg-red-600 text-white py-10 md:py-6 overflow-hidden">
      {/* Simulated Animated Background Overlay */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      {/* Additional Decorative Shapes */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: -30 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full mix-blend-screen"
      />
      <motion.div
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full mix-blend-screen"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Banner Title & Subheading */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold">
            Exciting News! Upgrading to Class X – Admissions Opening Soon!
          </h2>
          <p className="mt-2 text-sm md:text-base text-red-100 max-w-2xl mx-auto">
            Get ready for a transformative learning experience as we expand our curriculum.
            Stay tuned for more updates.
          </p>
        </div>
        
        {/* Admissions Headline & Email Input */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Animated Admissions Headline */}
          <div className="w-full md:w-1/2 text-center relative">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="py-4 text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-2xl"
            >
              Admissions Open Soon!
            </motion.h1>
          </div>
          
          {/* Email Input & Notify Button */}
          <div className="w-full md:w-auto flex items-center border border-white/30 rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 outline-none text-gray-800 flex-1"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-red-600 font-semibold transition-colors hover:bg-gray-100"
            >
              Notify Me
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
