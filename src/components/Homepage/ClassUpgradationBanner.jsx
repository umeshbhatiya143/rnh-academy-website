'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function ClassUpgradationBanner() {
  const progressControls = useAnimation();

  useEffect(() => {
    // Animate progress bar to 60% width when the component mounts
    progressControls.start({
      width: '60%',
      transition: { duration: 2, ease: 'easeOut' },
    });
  }, [progressControls]);

  return (
    <section className="bg-red-600 text-white py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Text */}
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Exciting News! Upgrading to Class X – Admissions Opening Soon!
          </h2>
        </div>
        
        {/* Progress Bar with Email Input */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Animated Progress Bar */}
          <div className="w-full md:w-1/2 bg-white/30 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={progressControls}
            />
          </div>
          
          {/* Email Input & Button */}
          <div className="w-full md:w-auto flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-full outline-none text-gray-800"
            />
            <button className="px-6 py-2 bg-white text-red-600 font-semibold rounded-r-full hover:bg-gray-100 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
