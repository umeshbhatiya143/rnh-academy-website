'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

// Hero Images (Replace with your actual images)
import HeroImage1 from '/public/images/homepage/FB_IMG_1739203153164.jpg';
import HeroImage2 from '/public/images/homepage/FB_IMG_1739203223596.jpg';
import HeroSlider from '@/components/Homepage/HeroSlider';
import Features from '@/components/Homepage/Features';
import Activities from '@/components/Homepage/Activities';

export default function Home() {
  const features = [
    {
      icon: '🧪',
      title: "STEAM Education",
      description: "Integrated Science, Technology, Engineering, Arts & Math curriculum"
    },
    {
      icon: '📚',
      title: "Modern Teaching",
      description: "Audio-visual smart classes with interactive learning"
    },
    {
      icon: '🏆',
      title: "Competitions",
      description: "ASSET exams, Olympiads, and inter-school events"
    }
  ];

  const activities = [
    { name: "Music & Dance", icon: '🎵' },
    { name: "Public Speaking", icon: '🎤' },
    { name: "Art & Craft", icon: '🎨' },
    { name: "Sports", icon: '⚽' }
  ];

  return (
    <main className="min-h-screen">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <Features/>

      {/* Activities Section */}
      <Activities/>

      {/* Upgradation Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-primary text-white py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif mb-4">Expanding to Class X!</h3>
          <div className="w-full bg-white/20 h-2 rounded-full mb-4">
            <div 
              className="bg-white h-2 rounded-full transition-all duration-1000"
              style={{ width: '60%' }}
            />
          </div>
          <p className="text-lg">Admissions opening soon for Class X</p>
        </div>
      </motion.div>

      {/* Gallery Preview */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12 text-primary">
            Campus Glimpses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative h-48 rounded-xl overflow-hidden"
              >
                <Image
                  src={`/images/gallery/${item}.jpg`}
                  alt="School activity"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}